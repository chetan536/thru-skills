let form = document.querySelector('#contactForm');
let respPara = document.querySelector('#resp')

function submitForm(e) {
    e.preventDefault();
    let data = {
        name: document.querySelector('input[name=name]').value,
        email: document.querySelector('input[name=email]').value,
        phone: document.querySelector('input[name=phone]').value,
        description: document.querySelector('#description').value
    }
    console.log(data)
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(respData => {
          console.log('response data',respData);
            respPara.innerText = respData.message;
            respPara.style.color = 'green';
            form.reset();
      }).catch(err => {
          console.log('error',err);
          respPara.innerText = 'Something Went Wrong, Please try again';
          respPara.style.color = 'red';
          form.reset();
      })
}

form.addEventListener('submit', submitForm);