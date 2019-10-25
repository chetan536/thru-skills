//  parseInt();

let n = '12';

let num = parseInt(n);

console.log(typeof num);

console.log(parseInt(10,2)); //gives binar octal numers in output

// parseFloat();

let f = '12.02';

console.log(parseInt(f)); //gives integer value

console.log(parseFloat(f)); //gives the decimal value


let nn = 12*'a';

console.log(nn);

// isNaN();

console.log(isNaN(nn));

// isFinite();

let finite = 1e308;

console.log(isFinite(finite));


let obj = {
    name : 'js',
    gender :'male'
};

let obj2 = {   //merging  //overwrite of name ;
   name : 'javascript',
    age :25
};

Object.assign(obj2,obj);

console.log(obj2 == obj);

console.log(obj2);


//  

let person1 = {
    name : 'ashu'
}

let person2 = {
    name : 'ashu'
}


// jsoN
console.log(JSON.stringify(person1));

console.log('compare 2 objes', person1===person2); 

console.log(JSON.stringify(person1) === JSON.stringify(person2));












