const client = require('prom-client');
const metrics = require('./metrics');

const register = new client.Registry();

register.setDefaultLabels({
  app: 'example-nodejs-app',
});

client.collectDefaultMetrics({ register });

Object.values(metrics).map((metric) => register.registerMetric(metric));

global.monutor = register;
module.exports = monutor;
