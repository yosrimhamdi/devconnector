import React from 'react';
import classnames from 'classnames';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({
  white,
  fullScreen,
  spaceAround,
  hidden,
  removed,
  overlay,
}) => {
  if (removed) {
    return null;
  }

  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--white': white,
    'spinner--space-around': spaceAround,
    'spinner--hidden': hidden,
    'spinner--overlay': overlay,
  });

  const spinnerIcon = white ? whiteSpinner : darkSpinner;

  return (
    <div className={className}>
      <div className="spinner__wrapper">
        <img src={spinnerIcon} className="spinner__circle" alt="loading..." />
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  hidden: false,
};

export default Spinner;
