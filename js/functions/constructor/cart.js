/**
 * item {
 *    name: 'Iphone'
 *    price:1000
 * }
 */

function Cart () {
    this.items = [];
}

Cart.prototype.add = function(item) {
    this.items.push(item);
}

Cart.prototype.totalPrice = function(discount) {
    // write the logic to return total price
}

Cart.prototype.removeItem = function(index) {
    // write the logic to remove a item from array
}


Cart.prototype.listItems = function() {
    // return the list of items
}

let myCart = new Cart();

myCart.add({name:'Mac',price:100,quantity:1})