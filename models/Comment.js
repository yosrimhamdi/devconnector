const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: String,
    required: [true, 'is required.'],
  },
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
    default: Date.now,
  },
});

commentSchema.pre(/^find/, function () {
  this.sort({ createdAt: -1 }).populate('user');
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
