let form = document.querySelector('form');
let errPara = document.querySelector('#error')

function validateForm(e) {
    e.preventDefault();
    let name = document.querySelector('input[name=name]').value;
    let email = document.querySelector('input[name=email]').value;

    if(!name) {
        errPara.innerText = 'Name field is required';
        errPara.style.color= 'red';
    }

    if(!email) {
        errPara.innerText += " Email is required"
    }
}


let nameField = document.querySelector('input[name=name]');


nameField.onblur = function() {
    let val = nameField.value;
    if(!val) {
        errPara.innerText = 'Name is required';
        errPara.style.color = 'red';
        nameField.style.border = '1px solid red';
    }else {
        errPara.innerText = '';
        nameField.style.border = '1px solid green';
    }
}

let emailField = document.querySelector('input[name=email]');


emailField.onfocus = function() {
    errPara.innerText = 'Please provide a valid email';
    errPara.style.color = 'blue'
}

form.onsubmit = validateForm;