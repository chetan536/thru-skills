const fs = require('fs');

let writeStream = fs.createWriteStream(__dirname+"/file.txt",'utf-8');


for (let i = 0; i<1e6; i++){
    writeStream.write("sdasdd faf fafaf  asfa"
        );
}


writeStream.end();




