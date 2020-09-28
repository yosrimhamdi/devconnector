const catchAsync = require('../../errors/catchAsync');
const Post = require('../../models/Post');
const Comment = require('../../models/Comment');
const Like = require('../../models/Like');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const { id: postId } = req.params;

  const post = await Post.findById(postId);

  if (post.user._id.toString() !== req.user._id.toString()) {
    return next(
      new AppError("Aunothorized. you can't delete other peoples's posts", 401),
    );
  }

  await post.remove();

  await Comment.deleteMany({ post: postId });

  await Like.deleteMany({ post: postId });

  res.status(204).json({ status: 'success', post: null });
});
