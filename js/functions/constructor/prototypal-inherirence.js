function gf() {
    this.gfName = 'grandfather';

};

function parent() {
    this.pName = 'parent';
}

function person(name) {
    this.name = name;

}

parent.prototype = new gf();
person.prototype = new parent();

let me = new person(me instanceof person); //checks me 




let me = new person('ashu');

console.log(me.name);   //ashu


console.log(me.pName);  //undefined

console.log(me.gfName);  //grandfather















