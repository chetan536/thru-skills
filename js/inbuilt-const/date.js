let today = new Date();

console.log(today);

// Getter and setter


console.log(today.getDate());
console.log(today.getMonth());  //month counts from 0;
console.log(today.getFullYear());
console.log(today.getMinutes());
console.log(today.getHours());

let setDate = today.setDate(15);
// setMonth
// setYear
// setHours
// setMinutes

console.log(new Date(setDate));

let dt = '10/24/2019';

let mydt = new Date(dt);

console.log(mydt);

console.log(today.getTime());

// Epoch time
console.log(new Date(0));   //epoch time from wer it gets calculated
