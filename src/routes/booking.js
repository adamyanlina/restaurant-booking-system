const router = require('express').Router();

// const authenticate = require('../middlewares/checkAuthenticate');
const { booking } = require('../controllers').booking;

router.post('/', booking);

module.exports = router;