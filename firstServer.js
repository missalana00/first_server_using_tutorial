// Creation of first server - Going along with a Node.js tutorial found 
// on YouTube-- link to URL in readme

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
    if(err) {
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port);
    });

});



// Run node firstServer.js 
// Go to browser and go to http: 127.0.0.1:3000 to see 'I can do this.'

// Server is up and running! Doesn't do much...just outputs text, but 
// it is, in fact, a server! 

// Now, we are going to load in a file, so we must require the fs module