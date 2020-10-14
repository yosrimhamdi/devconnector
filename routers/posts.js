const express = require('express');

const likes = require('./likes');
const comments = require('./comments');

const {
  getPosts,
  createPost,
  deletePost,
  getPostsPages,
} = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use('/:id/likes', likes);

router.use('/:id/comments', comments);

router.route('/').get(getPosts).post(requireLogIn, createPost);

router.route('/pages').get(getPostsPages);

router.route('/:id').delete(requireLogIn, deletePost);

module.exports = router;
