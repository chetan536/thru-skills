// function expression

var sum = function  (a,b){
    return a+b;
}

var res = sum(2,3)

console.log(res);


// NFE ==> named function expression

var sum = function add(a,b){
    return a+b;
}

var res = sum(2,3)

console.log(res);

          

// use of anonymous function
//1. self executing function
//2. callbacks

//self executing
(function (x,y) {
    console.log('I am anonymous',x)
})(2,3);


//callbacks
function foo() {
    console.log('hellow i m callbacks');
}


function acceptcallback(cb){
    cb();
}

acceptcallback(function(){
    console.log('i am passed as cb');
});

foo();
