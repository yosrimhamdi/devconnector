const catchAsync = require('../../../errors/catchAsync');
const Comment = require('../../../models/Comment');
const AppError = require('../../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const comment = await Comment.findOneAndDelete({
    user: req.user._id,
    post: req.params.id,
  });

  if (!comment) {
    return next(
      new AppError(
        `there is no commnet related to post with id: ${req.params.id}`,
        404
      )
    );
  }

  res.status(204).json({ status: 'success', comment: null });
});
