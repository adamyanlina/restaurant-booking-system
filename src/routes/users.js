const router = require('express').Router();

const { users } = require('../controllers');

router.get('/', users.getAll);

module.exports = router;