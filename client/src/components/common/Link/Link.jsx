import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import classnames from 'classnames';

import './Link.scss';

const Link = ({ to, text, transparent, rounded }) => {
  const className = classnames('link', {
    'link--transparent': transparent,
    'link--rounded': rounded,
  });

  return (
    <RouteLink to={to} className={className}>
      {text}
    </RouteLink>
  );
};

export default Link;
