let obj = {
    nam:'ashu',
    description: function(who){
        console.log('Hey '+who+' '+this.nam)
    }
}

// function description() {
//     console.log('Hey '+this.nam)
// }


let obj2 = {
    nam:'John'
}


obj.description('Dude')


obj.description.call(obj2,'dude');
// description.call(obj2);

// description.call(obj)

// apply();

obj.description.apply(obj2, ['world']);

// bind();


let desc = obj.description.bind(obj2, ['universe']);

desc();