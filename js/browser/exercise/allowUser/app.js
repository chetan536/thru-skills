let userAge = prompt('Enter your age');
let para = document.querySelector('#allowed');

console.log(userAge);

if(userAge && parseInt(userAge) > 18) {
    para.innerText = 'Welcome to my website';
    para.style.color = 'green';
}else {
    para.innerText = 'You are not allowed';
    para.style.color = 'red'
}