const { Schema, model } = require('mongoose');

const postLikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const PostLike = model('PostLike', postLikeSchema);

module.exports = PostLike;
