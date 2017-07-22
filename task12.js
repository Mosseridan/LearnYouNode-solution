//HTTP UPPERCASERER
if(process.argc < 3)
    console.err("Usage: task12.js <PORT>");
    
const http = require('http');
const map = require('through2-map');

var server = http.createServer((req,res) => {
    if(req.method !== 'POST')
        return res.end("I answer only POST messages\n");
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(process.argv[2]);