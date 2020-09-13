const express = require('express');

const likes = require('./likes');
const comments = require('./comments');

const {
  getAllPosts,
  createPost,
  getPost,
  deletePost,
} = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use('/:id/likes', likes);

router.use('/:id/comments', comments);

router.route('/').get(getAllPosts).post(requireLogIn, createPost);

router.route('/:id').get(getPost).delete(requireLogIn, deletePost);

module.exports = router;
