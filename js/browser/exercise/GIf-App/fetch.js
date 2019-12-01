let inpt = document.querySelector('input');
let sbmtBtn = document.querySelector('#submtBtn');
let displayImages = document.querySelector('.displayImgs');


function getData() {
    let value = inpt.value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=25&offset=0&rating=G&lang=en`;

    displayImages.innerHTML = '';

    fetch(url)
        .then(data => data.json())
        .then(dt => {
            dt.data.forEach(ele => {
                let url = ele.images.downsized.url;
                let img = document.createElement('img');
                img.src = url;

                displayImages.appendChild(img);
            })
        })
        .catch(err => {
            console.log(err);
            let para = document.createElement('p');
            para.innerText = "Something went Wrong, please try again";
            para.style.color = 'red';
            displayImages.appendChild(para)
        });

    inpt.value = '';
    inpt.focus();

}


let postURl = `https://jsonplaceholder.typicode.com/posts`;

let dt = {
    title: 'Testing Post',
    body: 'Please store this data',
    userId: 25
}

fetch(postURl, {
    method: 'POST',
    body: JSON.stringify(dt),
    headers: {
        'content-type':'application/json'
    }
}).then(respData => respData.json())
  .then(bdData => console.log('POST Resp', bdData))
  .catch(err => console.log(err))

sbmtBtn.addEventListener('click', getData);