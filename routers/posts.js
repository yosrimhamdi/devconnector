const express = require('express');

const {
  getAllPosts,
  createPost,
  getPost,
  deletePost,
} = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router();

router.route('/').get(getAllPosts).post(requireLogIn, createPost);

router.route('/:id').get(getPost).delete(requireLogIn, deletePost);

module.exports = router;
