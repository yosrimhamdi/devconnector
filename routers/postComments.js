const express = require('express');

const {
  addComment,
  deleteComment,
  getAllComments,
} = require('../controllers/posts/comments');
const { postMustExist } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router({ mergeParams: true });

router.use(requireLogIn, postMustExist);

router.route('/').get(getAllComments).post(addComment);

router.route('/:commentId').delete(deleteComment);

module.exports = router;
