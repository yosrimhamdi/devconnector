import { isEmail, isLength } from 'validator';

export default ({ email = '', password = '' }) => {
  const err = {};

  if (!isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!isLength(password, { min: 6, max: 30 })) {
    err.password = 'password in required: between 6 and 30 characters';
  }

  return err;
};
