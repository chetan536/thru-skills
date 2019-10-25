
//empty obj

var empty_obj = {};

console.log(typeof empty_obj);
console.log(empty_obj);


var js = {
    nam: 'javascript',
     gender:'female',
     age: 20
}

var reslt ={
    math: 40,
    physics: 60,
    bc: 70,
    "basic computer":77,
     "":45
}

console.log(js)
console.log(reslt)


var person = {
    name: 'chetan',
    gender: 'male',
    age:23,

    hobbies: ['singing','coding','cricket'],
     
    highesteducation: {
        degree: 'BE',
        stream:'electrical',
        passedyear:'2017',
        percentage:'75'
    },

    friends: [
        {
            name:'chetan',
            gender:'male',
        },
        {
            name:'josh',
            gender:'male',
        }
    ]
}

console.log(person);


//dot notation and bracket notation
console.log('name', person,name);



console.log('name', person,name);

// update property

person.name = 'abhinav';
console.log(person.name);


//add a new property
person.married =  false;

console.log(person);

//delete a property

delete person.age;

console.log(person);

//bracket notation

console.log(reslt["basic computer"]);


var userinput = 'name';
console.log(person[userinput]);

console.log(person['friends'][1]['gender']);





