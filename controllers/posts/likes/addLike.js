const catchAsync = require('../../../errors/catchAsync');
const PostLike = require('../../../models/PostLike');

module.exports = catchAsync(async (req, res, next) => {
  const like = await PostLike.create({ user: req.user._id, post: req.params.id });

  res.status(200).json({ status: 'success', like });
});
