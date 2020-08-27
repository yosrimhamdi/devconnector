const Post = require('../../models/Post');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.status(200).json({ statu: 'success', post });
});
