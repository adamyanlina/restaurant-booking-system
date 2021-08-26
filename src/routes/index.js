const router = require('express').Router();

const { combine } = require('../middlewares');

const usersRoutes = require('./users');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/

router.use(combine);

router.use('/users', usersRoutes);

module.exports = router;