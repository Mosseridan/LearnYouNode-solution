// HTTP FILE SERVER
if(process.argc < 4)
    console.err("Usage: task11.js <PORT> <FILE>");

const http = require('http');
const fs = require('fs')

var server = http.createServer((req,res) => 
     fs.createReadStream(process.argv[3]).pipe(res));
    
server.listen(process.argv[2]);