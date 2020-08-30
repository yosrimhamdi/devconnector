import validator from 'validator';

export default ({ name, email = '', password, passwordConfirm }) => {
  const err = {};

  if (!name) {
    err.name = 'name is required';
  }

  if (!validator.isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!password) {
    err.password = 'password in require';
  }

  if (!passwordConfirm) {
    err.passwordConfirm = 'password confrim is required';
  }

  return err;
};
