// console.log(xyz);

// let xyz = 19;

//ERROR() 

// referenceError
// syntaxError
// Evalerrror
// URIError





try {
    // console.log(xyz)
    
    // throw 'something nasty happend'

    throw new EvalError('something nasty happned ')
} catch (error) {
    console.log('in the catch block')
    console.log(error.message)
    console.log(error.stack)
    console.log(error.name)
} finally{
    console.log('i am finally')
}





console.log('hello js folks');



// 

function foo(){
    console.log(marker);
}

function bar() {
    console.log(' i am bar')
     foo();
}

function baz(){
console.log('i am baz')
bar()
}

baz();

// try {
//      baz();
// } catch (error) {
//     console.log(error)
// }