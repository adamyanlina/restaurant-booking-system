const router = require('express').Router();

const { combine } = require('../middlewares');

const usersRoutes = require('./users');
const authRoutes = require('./auth');
const mainRoute = require('./main');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/

router.use(combine);

router.use('/', mainRoute);
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);

module.exports = router;