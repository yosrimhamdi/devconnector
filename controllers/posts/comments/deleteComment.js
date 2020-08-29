const catchAsync = require('../../../errors/catchAsync');
const Comment = require('../../../models/Comment');
const AppError = require('../../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const { id: postId, commentId } = req.params;

  const comment = await Comment.findOneAndDelete({
    user: req.user._id,
    post: postId,
    _id: commentId,
  });

  if (!comment) {
    const message = `there is no comment with id: ${commentId} relative to the post with id: ${postId} made by you.`;

    return next(new AppError(message, 404));
  }

  res.status(204).json({ status: 'success', comment: null });
});
