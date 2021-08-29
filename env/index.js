const paths = [
  'env/.env',
  'env/.env.api',
  'env/.env.db',
  'env/.env.private',
];
module.exports = require('multi-env-load')({
  paths,
});
