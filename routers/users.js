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
  checkUserExistence,
  getUserPhoto,
} = require('../controllers/users');

const router = express.Router();

router.post('/register', register);

router.post('/register/check', checkUserExistence);

router.post('/login', logIn);

router.get('/logout', logOut);

router.get('/:id/photo', getUserPhoto);

router.use(requireLogIn);

router.post('/update/photo', uploadPhoto, resizePhoto, updateUserPhoto);

module.exports = router;
