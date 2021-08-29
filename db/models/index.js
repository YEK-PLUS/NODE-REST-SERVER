const Model = require('./model');

const Models = {
  Model: db.model('model', Model),
};

global.models = Models;
console.log('📀 Models: Connected'); // eslint-disable-line no-console

module.exports = Models;
