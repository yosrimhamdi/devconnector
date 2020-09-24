const Post = require('../../models/Post');
const catchAsync = require('../../errors/catchAsync');
const POSTS_PER_PAGE = require('../../utils/POSTS_PER_PAGE');

module.exports = catchAsync(async (req, res) => {
  const posts = await Post.find()
    .skip(POSTS_PER_PAGE * (req.query.page - 1))
    .limit(POSTS_PER_PAGE);

  res.status(200).json({ status: 'success', posts });
});
