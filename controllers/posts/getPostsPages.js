const Post = require('../../models/Post');
const POSTS_PER_PAGE = require('../../utils/POSTS_PER_PAGE');

module.exports = async (req, res) => {
  const Posts = await Post.find();

  const pages = Math.ceil(Posts.length / POSTS_PER_PAGE);

  res.status(200).json({ pages });
};
