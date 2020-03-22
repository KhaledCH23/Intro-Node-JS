const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function (err, String){
    console.log(String.split('\n').length-1);
});