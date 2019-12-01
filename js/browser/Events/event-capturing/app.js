let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner')
let btn = document.querySelector('button')



outer.addEventListener('click', function(e){
    // e.stopPropagation()
    alert('outer Clicked')
},true);

inner.addEventListener('click', function(e){
    //  e.stopPropagation()
    alert('inner Div Clicked')
},true);

btn.addEventListener('click',function(e){
      e.stopPropagation()
    alert('button clicked')
},false);







