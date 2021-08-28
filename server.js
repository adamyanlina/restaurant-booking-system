require('dotenv').config();
const path = require('path');
const express = require('express');
const router = require('./src/routes');

const app = express();

const { env } = process;

const port = env.PORT || 8080;
const apiVersion = env.API_VERSION || '/api/v1.0';

app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(apiVersion, router);

const server = () => app
    .listen(port)
    .on('error', (err) => { if (err) { throw err; } });

server();

process.on('SIGTERM', () => server().close(() => process.exit(0)));