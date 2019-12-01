let btn = document.querySelector('button');

let bd = document.body;

function randomNumber(min,max) {
    return parseInt(Math.random() * (max-min) +min);
}

function changeBG() {
    bd.style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`
}

btn.onclick = changeBG