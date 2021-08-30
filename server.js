require('dotenv').config();
const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const router = require('./src/routes');

const app = express();

const { PORT, API_VERSION, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(API_VERSION, router);

const server = () => app
    .listen(PORT)
    .on('error', (err) => { if (err) { throw err; } });

const sequelizeMain = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`, {
        logging: false
    }
);

sequelizeMain.authenticate()
    .then(() => server())
    .catch((err) => console.log(err));

process.on('SIGTERM', () => server().close(() => process.exit(0)));