var primitivestr = 'hello i am primitive';

var str = new String('hello i am string object');

console.log(typeof primitivestr);
console.log(typeof str);
console.log(str instanceof String);
console.log(primitivestr instanceof String);

console.log(str.length);
console.log(primitivestr.length);

console.log(primitivestr[1]);


//acces the vale from string object
console.log(str.toString());
console.log(str.valueOf());

console.log(str.toUpperCase());  // converts to upper case


//tolower case

console.log(primitivestr.toLowerCase());

// charAt();

console.log(str.charAt(2));


// indexof();

console.log(str.indexOf('l',3));

console.log(str.lastIndexOf('o',17));

// split(); important

console.log(primitivestr.split(' '));  // ('') seperates

// substr(); difference is asked

console.log(primitivestr.substr(1,4)); //included

console.log(primitivestr.substring(1,4));  //ending index not included

