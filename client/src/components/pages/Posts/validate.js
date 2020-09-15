import { isLength } from 'validator';

export default ({ text = '' }) => {
  const error = {};

  if (text && !isLength(text, { max: 300 })) {
    error.text = 'post must not be less than 300 character';
  }

  return error;
};
