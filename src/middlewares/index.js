const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const { compose } = require('compose-middleware');

const accessControlAllow = require('./accessControlAllow');

const json = express.json();
const urlencoded = express.urlencoded({ extended: false });

module.exports = {
    // errorHandler,
    combine: compose([
        cookieParser(),
        morgan('combined'),
        urlencoded,
        json,
        cors(),
        accessControlAllow,
    ]),
};