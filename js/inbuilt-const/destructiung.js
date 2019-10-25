let obj  = {
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

    // let gender = obj.gender;
    // let hobbies = obj.hobbies;
    // console.log(gender);
    // console.log(hobbies);

    let {gender, hobbies, age:myage} = obj;

    console.log(gender);
    console.log(hobbies);

    console.log(myage);



// math,physics,english,history

let result = [45,50,34,56];

// let english = result[2];
// let math = result[0]

let [math,,english] = result;

console.log(english);
console.log(math);


