const express = require('express');

const {
  addLike,
  removeLike,
  getLikesNumber,
} = require('../controllers/posts/likes');
const { postMustExist } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router({ mergeParams: true });

router.use(requireLogIn, postMustExist);

router.route('/').get(getLikesNumber).post(addLike).delete(removeLike);

module.exports = router;
