function foo() {
    return 'i an function foo'
}

function acceptsFunction(cb) {
    let res = cb();
    return res;
}


let res = acceptsFunction(foo);

console.log(res);

//

// function add(a,b){
//     return a+b;
// }

// function square(x){
//     return x*x;
// }


// let n1 = 10;
// let n2 = 5;

// let addition = add(n1,n2);

// console.log(addition)

// let sq = square(addition);

// console.log(sq);

//


function add(a,b,cb){
    if(typeof a != 'number'){
        cb('pass a numer to add',null)
    }else{
        let sum = a+b;
        cb(null, sum)
    }
}
    

function square(x ,cb){
    if(typeof x != 'number'){
        cb('square accepts a number',null)
    }else{
        cb(null, x*x)
    }
}


let n1 = 10;
let n2 = 5;

add('n1',n2,function(err,data ){ //changen1
    if(err){
        console.log(err);
    }else{
        console.log(data);
        square('data',function(err,sq){      // change data
            if(err){
                console.log(err)
            }else{
                console.log(sq);
            }
        })
    }
});





function outer (x) {
    // let a = 10;
    console.log('i am outer fn')
    function inner(y) {
       
        console.log('i am inner fn')
        return x+y;
    }

// console.log(b);

  return  inner;
}

 let val = outer(10);
let resl = val(10);

let resl2 = val(20);

console.log(resl);

console.log(resl2)
val();

//console.log(val);


//


//function sum (a,b){
    // return a+b;
//  }

function sum (x){
    return function(y){
        return x+y;
    }
}


let firstval = sum(2);
let finalres = firstval(2);

console.log(finalres);

















