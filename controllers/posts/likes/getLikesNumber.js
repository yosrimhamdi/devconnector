const mongoose = require('mongoose');

const PostLike = require('../../../models/PostLike');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const [stats] = await PostLike.aggregate([
    {
      $match: { post: mongoose.Types.ObjectId(req.params.id) },
    },
    {
      $group: {
        _id: null,
        likesNum: { $sum: 1 },
      },
    },
  ]);

  const likesNum = stats ? stats.likesNum : 0;

  res.status(200).json({ status: 'success', likesNum });
});
