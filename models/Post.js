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
});

postSchema.pre(/find/, function (next) {
  this.populate('user');

  next();
});

const Post = model('Post', postSchema);

module.exports = Post;
