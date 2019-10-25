
// function decleration

function myFunc () {
    console.log('inside the function log');
}

myFunc();

function add (a , b){
var sum = a+b;
console.log('sum is', sum );
return sum;
}
var firstadd=add(2,3);

var secondadd=add(5,5);
myFunc();


console.log(firstadd);
console.log(secondadd);


function add (a,b,c) {
    //arguments

console.log(arguments);

    var sum = a+b+c;

    if(typeof a !='number'){
        return 'pass a number'
    }
    console.log('sum is', sum );
return sum;
}
// var firstadd=add('ashu',3);

var secondadd=add(5,5,10,20);


// console.log(firstadd);
console.log(secondadd);





function add (){
    var sum = 0;

    for(var i=0; i < arguments,length; i++){
        sum = sum+arguments[i];

    }
    return sum;
}


var secondadd = add(5,5,10);

//console.log(firstadd);
console.log(secondadd);


// function evenodd