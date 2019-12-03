let event = require('events');

let emitter = new event.EventEmitter();

emitter.setMaxListeners(20);

emitter.on('knock', function() {
    console.log("Who's there!");
});

function knockListener() {
    console.log('What you want?')
}


emitter.on('knock', knockListener)

// emitter.on('knock', () => console.log('3'));
// emitter.on('knock', () => console.log('4'));
// emitter.on('knock', () => console.log('5'));
// emitter.on('knock', () => console.log('6'));
// emitter.on('knock', () => console.log('7'));
// emitter.on('knock', () => console.log('8'));
// emitter.on('knock', () => console.log('9'));
// emitter.on('knock', () => console.log('10'));
// emitter.on('knock', () => console.log('11'));


emitter.emit('knock');
emitter.emit('knock');


emitter.once('mail', function() {
    console.log('Sucessfully mail sent');
});


emitter.emit('mail');
emitter.emit('mail');


emitter.on('fullName', function(firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}`);
})


emitter.emit('fullName', 'Java', 'Script');



emitter.removeListener('knock', knockListener)


emitter.emit('knock')


emitter.removeAllListeners('fullName');

emitter.emit('fullName')