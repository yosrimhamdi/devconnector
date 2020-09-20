import React from 'react';
import classnames from 'classnames';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({ white, fullScreen }) => {
  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--white': white,
  });

  const spinner = white ? whiteSpinner : darkSpinner;

  return (
    <div className={className}>
      <img src={spinner} className="spinner__circle" alt="loading..." />
    </div>
  );
};

export default Spinner;
