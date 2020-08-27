const { Schema, model } = require('mongoose');

const postSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: [true, 'is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  dislikes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
