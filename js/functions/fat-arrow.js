// this keyword 


let sum = function(a,b) {
    return a+b;
}

// let add = (a,b) => {
//     return a+b;
// }


let add = (a,b) => a+b;

let sq = x => x*x;

let foo = () => 'i am foo';

console.log(add(2,2));
console.log(sq(5));
console.log(foo());


// function outer(x){
//     return function(y) {
//         return x+y;
//     }
// }

// or using fat-arrow

let outer = x => y => x+y;

let firstval=outer(10);
let res = firstval(10);

console.log(res);













