// console.log(global)


// console.log(global.process)


process.title = "my "
console.log(process)

console.log(process.platform)

console.log(process.pid);

console.log(process.cwd());


console.log(process.cpuUsage());


process.on('exit',function(){
    console.log('About to end the process')
});


process.on('uncaughtException',function(){
    console.log('something went wrong')
})



console.log('directory name',__dirname)


console.log('file name', __filename)




console.log(module);



















