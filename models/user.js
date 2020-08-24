const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name.'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an Email.'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password.'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator(passwordConfirm) {
        return this.passowrd === passwordConfirm;
      },
      message: 'password/ passwordConfirm do not match.',
    },
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
