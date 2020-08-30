import React from 'react';
import { Link } from 'react-router-dom';

import './CostumLink.scss';

const Button = ({ bgColor, color, text, to }) => {
  return (
    <Link
      className="costum-link"
      style={{ backgroundColor: bgColor, color }}
      to={to}
    >
      {text}
    </Link>
  );
};

export default Button;
