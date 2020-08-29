const machine = require('../../machine');
const Comment = require('../../../models/Comment');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id });

  res.status(200).json({ status: 'success', results: comments.length, comments });
});
