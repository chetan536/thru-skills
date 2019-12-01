let para = document.querySelector('#noSession');

// para.innerText = 'Updated Dynamically <a href="#">Google</a>'

para.innerHTML = 'Updated Dynamically <a href="#">Google</a>'

para.style.color = 'red';
para.style.border = '1px solid blue'

let nodePara = document.querySelector('#node');


nodePara.style.cssText = 'color:green;background-color:red;'

console.log(nodePara.hasChildNodes());

nodePara.childNodes[1].innerText = 'NodeJs'