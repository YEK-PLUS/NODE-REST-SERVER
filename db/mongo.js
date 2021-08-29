const mongoose = require('mongoose');

const {
  DBName,
  DBUsername,
  DBPassword,
  DBHost,
  DBDialect,
  DBPort,
} = process.env;

mongoose.connect(
  `${DBDialect}://${DBUsername}:${DBPassword}@${DBHost}:${DBPort}/${DBName}`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  },
);

mongoose.connection.on('open', () => {
  console.log('💾 MongoDB: Connected'); // eslint-disable-line no-console
});
mongoose.connection.on('error', (err) => {
  console.log('🤦🏻 MongoDB: Error', err); // eslint-disable-line no-console
});

global.db = mongoose;

module.exports = db;
