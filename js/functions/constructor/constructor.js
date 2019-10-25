function person(name,gender){
    // console.log(this);
    // this = {}
    this.name = name;
    this.gender = gender;
    this.description = function(){
        console.log('i am function')
    }

    // return 'hellow word'
}

person.married = false;

var js = new person('javascript','female');

var mac = new person('macbook','male');

console.log(js);

console.log(mac.name);

var ashu = person('ashu','male');

console.log(ashu);


console.log(js.constructor);

let obj = {
    a:10,
    b:24
}

console.log(obj.constructor);

console.log(person.constructor);

let sum = new Function('a','b','return a+b');

function sm(a,b) {
    return a+b;
}


console.log(sum(1,1));

console.log(typeof sum);




