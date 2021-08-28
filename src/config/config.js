/* eslint-disable quote-props */
/* eslint-disable quotes */
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { DB_HOST, DB_NAME, DB_NAME_TEST, DB_USERNAME, DB_PASSWORD } = process.env;

const configDev = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres'
};

const configTest = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME_TEST,
    host: DB_HOST,
    dialect: 'postgres'
};

const configProd = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'db_name',
    host: DB_HOST,
    dialect: 'postgres'
};

module.exports = {
    "development": configDev,
    "test": configTest,
    "production": configProd,
};