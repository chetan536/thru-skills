//  setTimeout();


setTimeout(function(){
    console.log('After two second')
} ,2000)



// using let or var inerview question
for(let i=1; i<=3; i++){
    setTimeout(function(){
        console.log(i)
        3,2000
    }
)}    



var counter = 1;


var id = setInterval(function(){
    if(counter == 5){
        clearInterval(id);
    }
    console.log('every second')
    counter++;
} ,3000);

console.log('Interval Id',id);












