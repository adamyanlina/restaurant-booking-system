const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const router = require('express').Router();

router.get('/', (req, res, next) => {
    const apiVersion = process.env.API_VERSION;

    res.render('index', { apiVersion });
});

module.exports = router;