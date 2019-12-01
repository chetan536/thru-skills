let inpt = document.querySelector('input');
let sbmtBtn = document.querySelector('#submtBtn');
let displayImages = document.querySelector('.displayImgs');


function getData() {
    displayImages.innerHTML = '';
    let value = inpt.value;

    let xhr = new XMLHttpRequest();

    function displayData() {
        if(xhr.readyState < 4) {
            return;
        }

        if(xhr.status !== 200) {
            return;
        }

        let data = JSON.parse(xhr.responseText);

        

        let dt = data.data;
        console.log(dt)
        // let imgs = data.data.images;

        dt.forEach(ele => {
            let url = ele.images.downsized.url;
            let img = document.createElement('img');
            img.src = url;

            displayImages.appendChild(img);
        })



        // // console.log(Object.keys(imgs))

        // Object.keys(imgs).forEach(ele => {
        //     let dt = imgs[ele];

        //     let img = document.createElement('img');
        //     img.src = dt.url;

        //     displayImages.appendChild(img);

        //     // console.log(dt)
        // })


        // console.log(imgs)


        // console.log(JSON.parse(xhr.responseText));
    }

    xhr.onreadystatechange = displayData;

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=25&offset=0&rating=G&lang=en`, true);

    xhr.send('');



}




sbmtBtn.addEventListener('click', getData);