const express = require('express');

const { register, logIn, requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(logIn);

router.get('/test', requireLogIn, (req, res) => res.json({ user: req.user }));

module.exports = router;
