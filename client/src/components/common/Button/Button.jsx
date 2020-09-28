import React from 'react';
import classnames from 'classnames';

import './Button.scss';

const Button = ({ text, rounded }) => {
  const className = classnames('button', {
    'button--rounded': rounded,
  });

  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};
export default Button;
