import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ bgColor, color, text, to }) => (
  <Link className="link" to={to}>
    {text}
  </Link>
);

export default Button;
