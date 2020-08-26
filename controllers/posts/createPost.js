const catchAsync = require('../../errors/catchAsync');
const Post = require('../../models/Post');

module.exports = catchAsync(async (req, res) => {
  const post = await Post.create({ ...req.body, user: req.user._id });

  res.status(200).json({ status: 'success', post });
});
