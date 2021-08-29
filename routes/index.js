const IpHandler = require('../middlewares/IpHandler');
const metrics = require('./metrics');
const main = require('./main');

const routes = (app) => {
  app.use('/metrics', IpHandler, metrics);
  app.use('/main', IpHandler, main);
};

module.exports = routes;
