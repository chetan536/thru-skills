let event = required('events');




let emitter = event.EventEmitter();


emitter.on('knock',function() {
    console.log("whos's there!");
});



function knockListner() {
    console.log('What you want!');
};

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


emitter.once('mail', function(){
    console.log('sucessfully mail sent')
})

emitter.emit('mail');
emitter.emit('mail');

emitter.on('fulName',function(firstName , lastName){
    console.log(`my name is ${firstName} ${lastName}`)
})

emitter.emit('firstName', 'java','script');

emitter.removeListner('knock',knockListner);

emitter.emit('knock')


emitter.removeAllListners('fullName');

emitter.emit('fullName')























