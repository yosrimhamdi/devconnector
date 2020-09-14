const PostLike = require('../../../models/Like');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const likes = await PostLike.find({ post: req.params.id });

  res.status(200).json({ status: 'success', likes, postId: req.params.id });
});
