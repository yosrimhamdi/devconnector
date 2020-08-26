const express = require('express');

const { createPost } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use(requireLogIn);

router.route('/').post(createPost);

module.exports = router;
