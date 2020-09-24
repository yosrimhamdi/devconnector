import React from 'react';
import classnames from 'classnames';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({ white, fullScreen, spaceAround, hidden }) => {
  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--white': white,
    'spinner--space-around': spaceAround,
    'spinner--hidden': hidden,
  });

  const spinner = white ? whiteSpinner : darkSpinner;

  return (
    <div className={className}>
      <div className="spinner__wrapper">
        <img src={spinner} className="spinner__circle" alt="loading..." />
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  hidden: false,
};

export default Spinner;
