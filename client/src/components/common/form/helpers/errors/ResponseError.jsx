import React from 'react';

import errorIcon from '../../icons/error.svg';

export default ({ responseError }) => {
  if (!responseError) {
    return null;
  }

  return (
    <div className="form__input-error-message">
      <img src={errorIcon} className="form__error-icon" alt="error" />
      <span>{responseError}</span>
      <span>.</span>
    </div>
  );
};
