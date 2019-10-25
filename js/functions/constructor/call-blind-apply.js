// let obj = {
//     name : 'ashu',
//     description: function(){
//         console.log('hey'+this.name)
//     }
// }

// let obj2 = {
//     name: 'john',
//     description: function(){
//        console.log('hey',+this.name)
//     }
// }

// obj.description();

// obj2.description();



let obj = {
    name : 'ashu',
    description:function(who){
        console.log('hey'+ who+' '+this.name)
    }
    }

    // function description(){
    //     console.log('hey'+ this.name);
    // }

let obj2 = {
    name: 'john',
   
}


obj.description('dude');

obj.description.call(obj2, 'dude');

// description.call(obj2)
// description.call(obj);


// apply();


obj.description.apply(obj2, ['world'])

// bind();

let desc = obj.description.bind(obj2, ['universe']);

desc();

// call and bind (interviw questions imp)









