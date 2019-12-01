

let ul = document.querySelector('#ulEle');
let li = document.querySelector('#liEle');
let anc = document.querySelector('#ancEle');




ul.onclick = function(e) {
    alert('Ul Clicked')
}

li.onclick = function(e) {

    e.stopPropagation()

    alert('LI Clicked')
}

anc.onclick = function(e) {

    // to stop bubbling
    e.stopPropagation()

    alert('Anchor Clicked');
}