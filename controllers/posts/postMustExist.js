const catchAsync = require('../../errors/catchAsync');
const Post = require('../../models/Post');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  if (!post) {
    return next(new AppError(`there is no post with id: ${postId}`, 404));
  }

  next();
});
