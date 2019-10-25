// this keyword points to current bobjects;

var a = 10;
console.log(this);


function add () {
    console.log(this);
}

add();

var obj = {
    name : 'hellow',
    desc : function(){
        console.log(this);

function inner(){
    console.log('inner ',this)
}
 inner();

    }
}

//method call
obj.desc();














