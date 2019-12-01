const fs = require('fs');


let readStream = fs.createReadStream(__dirname+'/myFile.txt');


let writeStream = fs.createWriteStream(__dirname+'/output.txt');


readStream.pipe(writeStream);






