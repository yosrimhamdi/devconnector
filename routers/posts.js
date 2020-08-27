const express = require('express');

const { getAllPosts, createPost } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use(requireLogIn);

router.route('/').get(getAllPosts).post(createPost);

module.exports = router;
