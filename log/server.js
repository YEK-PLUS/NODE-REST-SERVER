const morgan = require('morgan');
const logger = require('./logger');

const LoggerCreator = (app) => {
  app
    .use(
      morgan(
        ':date[clf] :status :method :remote-addr :url :response-time[3] :total-time[3] :http-version :referrer :user-agent',
        { stream: logger },
      ),
    )
    .use(morgan('dev'));
};
module.exports = LoggerCreator;
