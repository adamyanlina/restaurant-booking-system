require('dotenv').config();

const express = require('express');

const router = require('./src/routes');

const app = express();

// app.set('views', 'src/views');

const { env } = process;

const port = env.PORT || 8080;
const apiVersion = env.API_VERSION || '/api/v1.0';

// app.use(express.static('./src/public'));

app.use(apiVersion, router);

const server = () => app
  .listen(port)
  .on('error', (err) => { if (err) { throw err; } });

server();

process.on('SIGTERM', () => server().close(() => process.exit(0)));