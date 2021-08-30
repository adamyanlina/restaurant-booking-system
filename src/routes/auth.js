const router = require('express').Router();

const authenticate = require('../middlewares/checkAuthenticate');
const { signinPage, signin, signout } = require('../controllers').auth;

router.get('/signin', signinPage);
router.post('/signin', signin);
router.post('/signout', authenticate, signout);

module.exports = router;