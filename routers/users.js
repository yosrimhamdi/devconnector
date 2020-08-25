const express = require('express');

const { register, logIn, requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.route('/auth/register').post(register);

router.route('/auth/login').post(logIn);

router.route('/test').get(requireLogIn, (req, res) => {
  res.json({ user: req.user, message: 'authorized' });
});

module.exports = router;
