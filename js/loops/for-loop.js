// loops


// infinite loop

for(var i = 1; i<=10 ;i++) {
    console.log(i);
}

// for(;;) {
//     console.log(i)
// }

for(var i = 10; i >=1; i--) {
    console.log(i);
}


for(var i = 1; i<= 10; i++) {
    // console.log(`2 x ${i} = ${2*i}`);

    console.log("2 x "+i+ " = "+ 2*i);
}


for(var i = 2; i<=10; i++) {

    for(var j = 1; j<= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

// iterate over an array

var names = ['JS','Node','Express', 'MongoDB'];


// console.log(names[0]);
// console.log(names[1]);

console.log(names.length);
for(var i =0; i < names.length; i++) {
    console.log(names[i]);
}


// WAP to create new Array which has multiple of 2 to given

var nums = [2,4,56,60,25];

var newArr = [];

for(var i =0 ; i < nums.length ; i++) {
    // newArr[i] = nums[i] *2 ;

    newArr.push(nums[i]*2);

}

console.log(newArr);


// Reverse an array
// Count of even and odd elements


// for of
// for in