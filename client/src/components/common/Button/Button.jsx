import React from 'react';

import './Button.scss';

const Button = ({ text }) => (
  <button type="submit" className="button">
    {text}
  </button>
);

export default Button;
