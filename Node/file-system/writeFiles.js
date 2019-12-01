const fs = require('fs');

console.log('program starts')


// synchronous data

// fs.writeFileSync(__dirname+'/myFile.txt', 'this is written by Node','utf-8');

fs.writeFile(__dirname+'/myFile.txt', 'writing using fs writeFile ',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('succesfully ')
    }
})

console.log('program endss')



// fs.appendFile();

// fs.readdir();

// fs.rmdir();

// fs.rename();

// fs.chown();







