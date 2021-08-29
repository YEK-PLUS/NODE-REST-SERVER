const http = require('http');
const express = require('express');
const cors = require('./cors');
const girgir = require('./girgir');
const helmet = require('./helmet');
const metrics = require('./metrics');
const routes = require('../routes');

const port = process.env.PORT || '80';

const app = express();

app.set('port', port);
app.set('trust proxy', 1);
app.use(express.json({ limit: '50mb' }));

girgir(app);
helmet(app);
cors(app);
metrics(app);
routes(app);

const server = http.createServer(app);
server.listen(port);

console.log('🚀 Express: Connected'); // eslint-disable-line no-console
