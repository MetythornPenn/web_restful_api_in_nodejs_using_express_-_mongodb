let event = require('events');

// creating an event emitter object 
let eventEmitter = new event.EventEmitter();

// this is the event handler for the myEvent
eventEmitter.on('myEvent', () => {
    console.log('myEvent');
})

eventEmitter.on('myEvent2', () => {
    console.log('this is myEvent2');
})

// this is the event handler for the myEvent2
eventEmitter.emit('myEvent');






















