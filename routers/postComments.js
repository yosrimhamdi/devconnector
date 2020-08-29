const express = require('express');

const { addComment, deleteComment } = require('../controllers/posts/comments');
const { postMustExist } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router({ mergeParams: true });

router.use(requireLogIn, postMustExist);

router.route('/').post(addComment).delete(deleteComment);

module.exports = router;
