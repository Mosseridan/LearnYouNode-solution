// HTTP COLLECT
if(process.argc < 3)
    console.err("Usage: task8.js <URL>");
    
const http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
    var allData = "";
    res.setEncoding('utf8');
    res.on('data',  (data) => allData += data);
    res.on('end', () => { 
        console.log(allData.length);
        console.log(allData);
    });
    res.on('error', console.error);
}).on('error', console.error);