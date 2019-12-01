const fs = require('fs');

let readerStream = fs.createReadStream(__dirname+'/myFile.txt');

readerStream.setEncoding('utf-8');


let data = '';


readerStream.on('data',function(chunk){
    data += chunk;

});

readerStream.on('error',function(err){
    console.log(err)
});


readerStream.on('end',function(){
    console.log('reading sucess');

    console.log(data)
});







