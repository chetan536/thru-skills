var name = "Java";


console.log(name == "JS");

// if statement

if(name == "JS") {
    // if block
    console.log('Inside if block',name)
} else {
    console.log('Name property not matched')
}


var language = 'Python';


if(language == 'JS') {
    console.log('Language is Javascript')
} else if(language == 'Java') {
    console.log('Language is Java')
}else if (language == 'Python'){
    console.log('Language is Python')
}else {
    console.log('Choose a language')
}


var num = 20;


if(num % 2 == 0) {
    console.log('Number is even')
}else {
    console.log('Number is odd')
}



var actualPrice = 10000;

var discountedPrice = 0;


if(actualPrice <= 2000) {
    discountedPrice = actualPrice;
}else if (actualPrice > 2000 && actualPrice <= 5000) {
    discountedPrice = actualPrice - 500
}else if( actualPrice >= 10000) {
    discountedPrice = actualPrice- 1000;
}

console.log(discountedPrice);

// ternary operator
var evnOrOdd = (num%2 == 0) ? 'Even' :'Odd';

console.log(evnOrOdd);