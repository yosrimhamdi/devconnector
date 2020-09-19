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
      <div className="spinner__container">
        <img src={spinner} className="spinner__circle" alt="loading..." />
        <div className="spinner__message">loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
