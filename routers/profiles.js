const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const { getProfile } = require('../controllers/profiles');

const router = express.Router();

router.route('/').get(requireLogIn, getProfile);

module.exports = router;
