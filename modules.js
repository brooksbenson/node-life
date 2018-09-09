/*
  Arguments to module wrapper function:
  - exports
  - require
  - module
  - __filename
  - __dirname
*/

// logger: custom module
const log = require('./logger');

log('Hello, World');

// path: node module
// object containing methods for working with paths
const path = require('path');

const pathObj = path.parse(__filename);
log(pathObj);

// os: node module
// for working with machines os
const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

log(totalMemory, freeMemory);

// fs: node module
// for working with the file system
const fs = require('fs');

const filesSync = fs.readdirSync('./');
log('blocking ', filesSync);

fs.readdir('./', (e, files) => {
  if (e) log('error: ', e);
  else log('non-blocking', files);
});
