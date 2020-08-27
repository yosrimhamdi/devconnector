const createPost = require('./createPost');
const getAllPosts = require('./getAllPosts');
const getPost = require('./getPost');
const deletePost = require('./deletePost');
const postMustExist = require('./postMustExist');

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  postMustExist,
};
