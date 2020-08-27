const catchAsync = require('../../errors/catchAsync');
const Post = require('../../models/Post');

module.exports = catchAsync(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: 'sucess', post: null });
});
