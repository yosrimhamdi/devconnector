const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const { getProfile, createProfile } = require('../controllers/profiles');

const router = express.Router();

router.use(requireLogIn);

router.route('/').get(getProfile).post(createProfile);

module.exports = router;
