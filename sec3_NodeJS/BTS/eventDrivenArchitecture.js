let event = require('events');

// creating an event emitter object 
let eventEmitter = new event.EventEmitter();

// this is the event handler for the myEvent
eventEmitter.on('myEvent', () => {
    console.log('myEvent');
})

// this is the event handler for the myEvent2
eventEmitter.emit('myEvent');

// firing the connection event 
eventEmitter.on('myEvent', () => {
    console.log('myEvent2');
})























