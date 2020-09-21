import { isEmail, isLength } from 'validator';

export default ({ email = '', password = '', firstname, surname }) => {
  const err = {};

  if (!firstname) {
    err.firstname = 'first name is required';
  }

  if (!surname) {
    err.surname = 'surname is required';
  }

  if (!isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!isLength(password, { min: 6, max: 30 })) {
    err.password = 'password in required: 6-30 characters';
  }

  return err;
};
