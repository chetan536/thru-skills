let btn = document.querySelector('button');


btn.addEventListener('click', function(e) {
    alert('Button Clicked')
})

function secondListner(e) {
    alert('Second Event Fired');
    btn.removeEventListener('click', secondListner)
}

btn.addEventListener('click', secondListner)
