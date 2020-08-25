const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const {
  getProfile,
  createProfile,
  updateProfile,
} = require('../controllers/profiles');

const router = express.Router();

router.use(requireLogIn);

router.route('/').get(getProfile).post(createProfile).patch(updateProfile);

module.exports = router;
