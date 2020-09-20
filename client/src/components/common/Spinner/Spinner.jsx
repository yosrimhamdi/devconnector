import React from 'react';
import classnames from 'classnames';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({ white, fullScreen, noMessage }) => {
  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--white': white,
    'spinner--no-message': noMessage,
  });

  const spinner = white ? whiteSpinner : darkSpinner;

  return (
    <div className={className}>
      <img src={spinner} className="spinner__circle" alt="loading..." />
      <div className="spinner__message">loading...</div>
    </div>
  );
};

export default Spinner;
