const catchAsync = require('../../../errors/catchAsync');
const Comment = require('../../../models/Comment');

module.exports = catchAsync(async (req, res) => {
  const comment = await Comment.create({
    ...req.body,
    user: req.user._id,
    post: req.params.id,
  });

  res.status(200).json({ status: 'success', comment });
});
