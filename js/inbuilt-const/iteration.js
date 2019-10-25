let arr = [23,24,56,67];

//for in loop
for ( var ele in arr) {
    console.log(arr[ele]);
}


// for of
for (var el of arr){
    console.log(el);
}

let obj = {
    name:'JS',
    gender:'male',
    age:20
}

for (let ele in obj){
    if(obj.hasOwnProperty(ele)){
    console.log(obj[ele]);
}
}

// for of is only for arr not for obj


// 

let keys = Object.keys(obj);

console.log(keys)

Object.keys(obj).forEach(ele => {
    console.log(obj[ele])
})


