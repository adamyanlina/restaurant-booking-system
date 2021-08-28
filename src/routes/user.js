const router = require('express').Router();

const authenticate = require('../middlewares/checkAuthenticate');
const { getAll, getMe } = require('../controllers/user');

router.get('/', getAll);
router.get('/me', authenticate, getMe);

module.exports = router;