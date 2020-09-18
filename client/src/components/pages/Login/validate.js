import { isEmail } from 'validator';

export default ({ email = '', password = '' }) => {
  const err = {};

  if (!isEmail(email)) {
    err.email = 'invalid email';
  }

  if (!password) {
    err.password = 'please enter the password of DevConnector account';
  }

  return err;
};
