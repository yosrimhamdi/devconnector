const Post = require('../../models/Post');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const post = await Post.create({ ...req.body, user: req.user._id });

  post.user = req.user;

  res.status(201).json({ status: 'success', post });
});
