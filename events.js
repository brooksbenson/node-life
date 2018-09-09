const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', e => {
  console.log(e);
});

emitter.on('logging', e => {
  console.log(e);
});

emitter.on('logging', e => {
  console.log('logging fired twice');
});

emitter.emit('messageLogged', { id: 1, url: 'http://' });
emitter.emit('logging', 'Hello, World');
