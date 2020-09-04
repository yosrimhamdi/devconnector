import validator from 'validator';

export default ({ email = '', password = '' }) => {
  const err = {};

  if (!validator.isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!validator.isLength(password, { min: 6, max: 30 })) {
    err.password = 'password in required: between 6 and 30 characters';
  }

  return err;
};
