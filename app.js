const Logger = require('./logger');

const loggerInstance = new Logger();

loggerInstance.on('messageLogged', ({ id }) => {
  console.log(`Message logged with id ${id}`);
});

loggerInstance.log('Hello, World');
