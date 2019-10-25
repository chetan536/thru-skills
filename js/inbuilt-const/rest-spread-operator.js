/*
...variable =>

rest => conveerts comma seperated values to an array
spread => converts  array to comma seperated values
*/

function add(...args){
//    arguments
console.log(args)
console.log(...args)
}

add(12,23,45,67);

add(12,34)


let arr = [34,45,67,89];

let largest = Math.max(...arr);

console.log(largest)