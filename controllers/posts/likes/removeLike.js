const catchAsync = require('../../../errors/catchAsync');

const PostLike = require('../../../models/PostLike');

module.exports = catchAsync(async (req, res) => {
  await PostLike.findOneAndDelete({
    user: req.user._id,
    post: req.params.id,
  });

  res.status(204).json({ status: 'success', like: null });
});
