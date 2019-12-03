let EventEmitter = require('events').EventEmitter;
let util = require('util');



let db = {
    users: [
        {name:'JS', gender:'Female'},
        {name:'JavaScript', gender:'Female'}
    ]
}


function UserList() {

    // inherits its own property only
    EventEmitter.call(this);
}

// inherits prototype properties 
util.inherits(UserList, EventEmitter);

UserList.prototype.save = function (usrObj) {
    console.log('Saving User');
    db.users.push(usrObj);
    this.emit('save');
}

UserList.prototype.all = function() {
    console.log('Users List');
    console.log(db.users)
    return db.users;
}


module.exports = UserList;