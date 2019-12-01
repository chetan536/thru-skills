const fs = require('fs');


let data = 'there is no guareentyekjnk fs.stat() fs.rename()'


let writeSteam = fs.createWriteStream(__dirname+'/myle.txt',{encoding:'utf-8'})


writeSteam.write(data);


writeSteam.write(data);

writeSteam.toString('finish',function(){
    console.log('done writing');
})

writeSteam.on('error',function(err){
    console.log(err);
})