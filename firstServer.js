// Creation of first server - Going along with a Node.js tutorial found 
// on YouTube-- link to URL in readme

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('I can do this.');
});

server.listen(port, hostname, () => {
    console.log('Serving started on port ' + port);
});