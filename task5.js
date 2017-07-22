// FILTERED LS
const fs = require('fs');
const path = require('path');

if(process.argc < 4)
    return console.error("Usage: task5.js <path> <extension>");

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirPath, (err, fileNames) => {
    if (err) return console.error(err);
    fileNames.forEach((fileName) => { 
        if (path.extname(fileName) == extension)
            console.log(fileName);
    });
});
    