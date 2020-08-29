const express = require('express');

const postLikes = require('./postLikes');
const postComments = require('./postComments');

const {
  getAllPosts,
  createPost,
  getPost,
  deletePost,
} = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.use('/:id/likes', postLikes);

router.use('/:id/comments', postComments);

router.route('/').get(getAllPosts).post(requireLogIn, createPost);

router.route('/:id').get(getPost).delete(requireLogIn, deletePost);

module.exports = router;
