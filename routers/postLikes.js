const express = require('express');

const { addLike, removeLike } = require('../controllers/posts/likes');
const { postMustExist } = require('../controllers/posts');
const { requireLogIn } = require('../controllers/authentication');

const router = express.Router({ mergeParams: true });

router.use(requireLogIn);

router.use(postMustExist);

router.route('/').post(addLike).delete(removeLike);

module.exports = router;
