const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const fs = require('fs');

const avatar = fs.readFileSync(`${__dirname}/../static/default.svg`);

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'A user must have a firstname.'],
  },
  surname: {
    type: String,
    required: [true, 'A user must have a surname.'],
  },
  fullname: {
    type: String,
    default: function () {
      return `${this.firstname} ${this.surname}`;
    },
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
  photo: {
    buffer: {
      type: Buffer,
      default: avatar,
    },
    updatedAt: {
      type: Date,
    },
    mimetype: {
      type: String,
      default: 'image/svg+xml',
    },
    path: {
      type: String,
      default: function () {
        return `/api/users/${this._id}/photo`;
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
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

userSchema.methods.updatePhoto = async function (file) {
  this.photo.buffer = file.buffer;

  this.photo.updatedAt = Date.now();

  this.photo.mimetype = 'image/jpeg';

  this.photo.path = `/api/users/${this._id}/photo?${Date.now()}`;

  return this.save({ validateBeforeSave: false });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
