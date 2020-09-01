const express = require('express');

const {
  register,
  logIn,
  requireLogIn,
  logOut,
} = require('../controllers/authentication');

const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(logIn);

router.route('/logout').get(logOut);

router.get('/test', requireLogIn, (req, res) => res.json({ user: req.user }));

module.exports = router;
