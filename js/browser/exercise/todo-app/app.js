let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let displayList = document.querySelector('#displayList');

let items = JSON.parse(localStorage.getItem('list')) || [];

function addTodoItem() {
    let value = inpt.value;
    let data = {
        value: value,
        checked: false
    }
    items.push(data);
    localStorage.setItem('list', JSON.stringify(items))
    renderList(items);
    inpt.value = '';
    inpt.focus();
}

function renderList(list) {
   displayList.innerHTML =  list.map((ele,i) => {
        return `
            <li>
                <input type="checkbox" data-id=${i} id="inpt${i}" ${ele.checked ? 'checked': ''} />
                <label>${ele.value}</label>
            </li>
        `
    }).join('')
}

renderList(items)

function toggle(e) {
    // console.log(this)
    // console.log(e.target);

    if(!e.target.matches('input')) return;

    let ele = e.target;

    let index = parseInt(ele.dataset.id);

    // if(items[index].checked) {
    //     items[index].checked = false
    // }else {
    //     items[index].checked = true
    // }

    items[index].checked = !items[index].checked

    localStorage.setItem('list', JSON.stringify(items))

    renderList(items)

} 

displayList.addEventListener('click', toggle)

btn.addEventListener('click', addTodoItem)