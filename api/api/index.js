const { ApiServer, ApiServerKey } = process.env;

const { createInstance } = require('../tools');

const Api = createInstance(ApiServer, ApiServerKey);
console.log('🐬 API: Connected'); // eslint-disable-line no-console

module.exports = Api;
