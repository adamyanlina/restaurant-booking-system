const router = require('express').Router();

const { signinPage, signin, signout } = require('../controllers').auth;

router.get('/signin', signinPage);
router.post('/signin', signin);

// TODO: Write 'authenticate' middleware
router.post('/signout', signout);

module.exports = router;