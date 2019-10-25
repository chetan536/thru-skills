//repetative executions
//1 to 10

for (var i=1; i <= 10; i++){
    console.log(i)

}

//10 to 1
for (var i = 10; i>=1; i--){
    console.log(i);
}

for (var j = 1; j <= 10; j++){
    console.log(`2 x ${j} = ${2*j}`);
}

/*var i=1
for(;;){
    console.log(i)
} */
console.log(`upto 10`);
for (var a = 1; a<=10; a++){
    for (var b = 1; b<=10; b++ ){
        console.log(a + `x` + b + `=` + a*b);
    }
}


//iterate over an array
var names = [`js`, `node`, `express`, `mongodb` ];
for (var z = 0; z < names.length; z++){
    console.log(names[z]);
}

//wap to create new array which multiplies of 2 given array
var mul = [2,5,10,60];
newMul = [];
for (var i=0; i < mul.length; i++){
    mul[i] = mul[i] * 2;
    //newMul.push(mul[i] * 2);
}

console.log(mul);

// reverse an array 
//count of  even and odd elements
