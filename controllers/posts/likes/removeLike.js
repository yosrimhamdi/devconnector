const catchAsync = require('../../../errors/catchAsync');
const PostLike = require('../../../models/Like');
const AppError = require('../../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const like = await PostLike.findOneAndDelete({
    user: req.user._id,
    post: req.params.id,
  });

  if (!like) {
    return next(
      new AppError(
        `you didn't make a like on the post with id: ${req.params.id}`,
        404
      )
    );
  }

  res.status(204).json({ status: 'success', like: null });
});
