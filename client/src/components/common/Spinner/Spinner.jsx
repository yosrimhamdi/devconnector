import React from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

import whiteSpinner from './spinner-white.svg';
import darkSpinner from './spinner.svg';
import './Spinner.scss';

const Spinner = ({
  white,
  fullScreen,
  visible,
  overlay,
  onContent,
  onBottom,
  small,
  fullVheight,
  spaceAround,
}) => {
  if (!visible) {
    return null;
  }

  const className = classnames('spinner', {
    'spinner--full-screen': fullScreen,
    'spinner--on-bottom': onBottom,
    'spinner--overlay': overlay,
    'spinner--on-content': onContent,
    'spinner--small': small,
    'spinner--full-vh': fullVheight,
    'spinner--space-around': spaceAround,
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
  visible: true,
};

export default Spinner;
