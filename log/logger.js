const rfs = require('rotating-file-stream');
const path = require('path');

const logger = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(process.env.PWD, 'logs'),
});
console.log('📃 Logger: Connected'); // eslint-disable-line no-console

module.exports = logger;
