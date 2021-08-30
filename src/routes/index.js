const router = require('express').Router();

const { combine } = require('../middlewares');

const userRoutes = require('./user');
const authRoutes = require('./auth');
const mainRoute = require('./main');
const bookingRoute = require('./booking');

/*
 Composing multiple middleware functions
 into a single request middleware handler
*/

router.use(combine);

router.use('/', mainRoute);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/booking', bookingRoute);

module.exports = router;