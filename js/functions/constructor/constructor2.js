function gadget(name,color){
    this.name = name;
    this.color = color;
}

gadget.price = 20;

gadget.prototype.company = 'google';

console.log(gadget.price);

var watch = new gadget('titan','brown');

var marker = new watch.constructor('camlin','blue');

console.log(watch.constructor);

console.log(watch.name);

console.log(watch.price);

console.log('trying to access prototype', watch.company);

console.log(watch.hasOwnProperty('company'))

console.log(watch.constructor.prototype.hasOwnProperty('company'));
console.log('trying to find toString');

console.log(watch.hasOwnProperty('tostring'));
console.log(watch.constructor.hasOwnProperty('tostring'));
console.log(watch.constructor.prototype.hasOwnProperty('tostring'));



console.log(Object.hasOwnProperty('tostring'));
console.log(Object.constructor.prototype.hasOwnProperty('tostring'));


let n = watch.toString(10);
console.log(n);

console.log(marker);





