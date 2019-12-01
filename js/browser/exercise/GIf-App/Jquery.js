let inpt = document.querySelector('input');
let sbmtBtn = document.querySelector('#submtBtn');
let displayImages = document.querySelector('.displayImgs');


function getData() {
    let value = inpt.value;
    displayImages.innerHTML = '';

    let url = `https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=25&offset=0&rating=G&lang=en`;


    $.ajax({
        method:'GET',
        url:url,
        success: function(data) {
            console.log('Sucess', data)
            let dt = data.data;
            // console.log(dt)
            dt.forEach(ele => {
                let url = ele.images.downsized.url;
                let img = document.createElement('img');
                img.src = url;
    
                displayImages.appendChild(img);
            })
        },
        error: function(dt) {
            console.log('Error', dt)
        }  
    })

}


sbmtBtn.addEventListener('click', getData);