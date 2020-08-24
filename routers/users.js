const express = require('express');

const { signUp } = require('../controllers/authentication');

const router = express.Router();

router.route('/').post(signUp);

module.exports = router;
