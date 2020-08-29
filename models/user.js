const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name.'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an Email.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password.'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'no password confirm. Confirm your Password.'],
    validate: {
      validator(passwordConfirm) {
        return this.password === passwordConfirm;
      },
      message: 'password/ passwordConfirm do not match.',
    },
  },
  photo: {
    type: String,
    default: 'default.png',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  }

  next();
});

userSchema.methods.validatePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);

  return isValid;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
