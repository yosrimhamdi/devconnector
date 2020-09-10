import { isLength } from 'validator';

export default ({ text = '' }) => {
  const error = {};

  if (text && !isLength(text, { min: 10, max: 300 })) {
    error.text = 'post must be between 10 and 300 characters';
  }

  return error;
};
