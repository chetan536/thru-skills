let User = required('./userList');

let usr = new User();

usr.on('save'),function(){
    console.log('User stored in db')
}

usr.save({name:'chetan',gender:'male'});

usr.all();

