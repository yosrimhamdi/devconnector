const express = require('express');

const { register, logIn } = require('../controllers/authentication');

const router = express.Router();

router.route('/auth/register').post(register);

router.route('/auth/login').post(logIn);

module.exports = router;
