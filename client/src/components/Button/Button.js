import React from 'react';

import './Button.scss';

const Button = ({ bgColor, color, className, text }) => {
  return (
    <button
      className={`button ${className}`}
      style={{ backgroundColor: bgColor, color }}
    >
      {text}
    </button>
  );
};

export default Button;
