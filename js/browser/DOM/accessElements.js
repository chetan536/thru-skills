// getElementsByTagName();

let paras = document.getElementsByTagName('p');


console.log(paras[0]);

// getElementsByClassName();
let classNames = document.getElementsByClassName('head');

console.log(classNames);

// getElementById();

let para = document.getElementById('noSession');

console.log(para);


// querySelector()
// querySelectorAll();


let p = document.querySelector('p');
let ps = document.querySelectorAll('p');

console.log(p);
console.log(ps);


let firstHead = document.querySelector('h3[class=head]');
console.log(firstHead)

let noSess = document.querySelector('#noSession');

let inptName = document.querySelector('input[name=name]')

console.log(inptName)

console.log(noSess);