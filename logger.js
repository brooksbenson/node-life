const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit('messageLogged', { id: Math.floor(Math.random() * 10) });
  }
}

module.exports = Logger;
