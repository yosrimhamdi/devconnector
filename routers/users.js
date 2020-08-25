const express = require('express');

const { signUp, logIn } = require('../controllers/authentication');

const router = express.Router();

router.route('/auth/register').post(signUp);

router.route('/auth/login').post(logIn);

module.exports = router;
