import validator from 'validator';

export default ({ name, email = '', password = '', passwordConfirm }) => {
  const err = {};

  if (!name) {
    err.name = 'name is required';
  }

  if (!validator.isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!validator.isLength(password, { min: 6, max: 30 })) {
    err.password = 'password in required: between 6 and 30 characters';
  }

  if (passwordConfirm !== password) {
    err.passwordConfirm = "passwords don't match";
  }

  return err;
};
