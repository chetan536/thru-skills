// require returns exports object

let user = require('./user-module');

let bar2 = require('./user-module').bar2


console.log('Required User ',user)


user.foo();

user.bar2();


bar2();
