const httpRequestDurationMicroseconds = require('./httpRequestDurationMicroseconds');

const metrics = {
  httpRequestDurationMicroseconds,
};
global.metrics = metrics;
module.exports = metrics;
