const { createLogger, transports } = require('winston');
require('winston-daily-rotate-file');

const winston = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: true,
      colorize: true,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/debug-%DATE%.log',
      level: 'debug',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/info-%DATE%.log',
      level: 'info',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/notice-%DATE%.log',
      level: 'notice',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/warning-%DATE%.log',
      level: 'warning',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
    }),
    new transports.DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      level: 'error',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
    }),
  ],
  exitOnError: false,
});

winston.debug('Logging initialized at debug level');

// winston.stream = {
//   write(message) {
//     winston.info(message.trim());
//   },
// };
console.log('📃 Winston: Connected'); // eslint-disable-line no-console

global.winston = winston;
module.exports = winston;
