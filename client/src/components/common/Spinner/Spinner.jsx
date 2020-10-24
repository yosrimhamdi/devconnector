import React from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({
  white,
  fullScreen,
  spaceAround,
  removed,
  overlay,
  onContent,
  onBottom,
}) => {
  if (removed) {
    return null;
  }

  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--on-bottom': onBottom,
    'spinner--overlay': overlay,
    'spinner--space-around': spaceAround,
    'spinner--on-content': onContent,
  });

  const spinnerIcon = white ? whiteSpinner : darkSpinner;

  const spinner = (
    <div className={className}>
      <img src={spinnerIcon} className="spinner__circle" alt="loading..." />
    </div>
  );

  if (fullScreen) {
    return ReactDOM.createPortal(spinner, document.getElementById('spinner'));
  }

  return spinner;
};

Spinner.defaultProps = {
  hidden: false,
};

export default Spinner;
