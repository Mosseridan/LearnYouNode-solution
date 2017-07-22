// MAKE IT MODULAR
const filterls = require('./task6Module.js');

if(process.argc < 4)
    return console.error("Usage: task5.js <path> <extension>");
    
filterls(process.argv[2], process.argv[3], (err, filteredFileNames) => {
    if(err) console.err(err);
    filteredFileNames.forEach((fileName) => console.log(fileName));
});