const createPost = require('./createPost');
const getPosts = require('./getPosts');
const deletePost = require('./deletePost');
const postMustExist = require('./postMustExist');
const getPostsPages = require('./getPostsPages');

module.exports = {
  createPost,
  getPosts,
  deletePost,
  postMustExist,
  getPostsPages,
};
