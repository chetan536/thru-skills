// scope => 

var a = 10;

    if(true){
    var b = 10;
    console.log(a);
    console.log('val of b',b);

}
console.log('val outside',b);


function foo() {
    var c = 10;
    d = 20;
    console.log('inside function',a);
    console.log('val of b inside',b);
    console.log('val of c inside fn',c);

}
foo(2)

// console.log('value of c outside',c);

console.log(d);


//testing

var a = 10;
function foo(){
    console.log(a);
    var a = 20;
    console.log(a);
}

foo();






















