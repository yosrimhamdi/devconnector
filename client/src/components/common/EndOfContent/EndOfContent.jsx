import React from 'react';
import classnames from 'classnames';

import './EndOfContent.scss';

const EndOfContent = ({ currentPage, pages, white }) => {
  const className = classnames('end-of-content', {
    'end-of-content__white': white,
  });

  if (currentPage === pages) {
    return <div className={className}>end of content</div>;
  }

  return null;
};

export default EndOfContent;
