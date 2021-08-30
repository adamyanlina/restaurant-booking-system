const router = require('express').Router();

const authenticate = require('../middlewares/checkAuthenticate');
const { booking } = require('../controllers').booking;

router.post('/', authenticate, booking);

module.exports = router;