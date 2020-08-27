const catchAsync = require('../../errors/catchAsync');
const Post = require('../../models/Post');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (post.user._id.toString() !== req.user._id.toString()) {
    return next(
      new AppError("Aunothorized. you can't delete other peoples's posts", 401)
    );
  }

  await post.remove();

  res.status(204).json({ status: 'success', post: null });
});
