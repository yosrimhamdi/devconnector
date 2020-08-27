const express = require('express');

const { getAllPosts, createPost, getPost } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use(requireLogIn);

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').get(getPost);

module.exports = router;
