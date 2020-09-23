const express = require('express');

const {
  register,
  logIn,
  requireLogIn,
  logOut,
} = require('../controllers/authentication');

const {
  uploadPhoto,
  resizePhoto,
  updateUserPhoto,
  deletePreviousUserPhoto,
  isRegistered,
} = require('../controllers/users');

const router = express.Router();

router.post('/register', register);

router.post('/register/check', isRegistered);

router.post('/login', logIn);

router.get('/logout', logOut);

router.post(
  '/update/photo',
  requireLogIn,
  uploadPhoto,
  deletePreviousUserPhoto,
  resizePhoto,
  updateUserPhoto,
);

module.exports = router;
