let EventEmitter = required('event').EventEmitter;


let db = {
    users: [
        {name:'js', gender:'Female'},
        {name:'Javascript',gender:'female'}
    ]
}


function UserList(){
    //  ingerits its own property only
    EventEmitter.call(this);

}
// inherit prototype properties
util.inherit(UserList,EventEmitter);


UserList.prototype.save = function (usrObj){
    console.lo
    ('saving User');
    db.users.push(usrObj);
    yhis.emit('save');
}

UserList.prototype.all = function() {
    console.log('User List')
    return db.users;
}


module.exports = UserList;