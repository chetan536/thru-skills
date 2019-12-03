let User = require('./userList');

let usr = new User();

usr.on('save', function() {
    console.log('User Stored in DB')
})


usr.save({name:'Ashu', gender:'Male'});

usr.all();