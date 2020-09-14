const { Schema, model } = require('mongoose');

const postLikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

postLikeSchema.index({ user: 1, post: 1 }, { unique: true });

postLikeSchema.pre(/^find/, function () {
  this.select('user -_id');
});

const PostLike = model('Like', postLikeSchema);

module.exports = PostLike;
