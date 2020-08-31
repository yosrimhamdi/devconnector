import validator from 'validator';

export default ({ email = '', password }) => {
  const err = {};

  if (!validator.isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!password) {
    err.password = 'password is required';
  }

  return err;
};
