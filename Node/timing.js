
//time functions

setTimeout(function(){
    console.log('time out function')
},0);


var counter = 1

  setInterval(function(){
    console.log('interval function');

    if(counter == 5){
        clearInterval(this);
    }
    counter++;
},1000);



// setImmediate

setImmediate(function(){
    console.log('Immediate Execution')
})







