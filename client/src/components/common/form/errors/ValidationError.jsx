import React from 'react';

import errorIcon from './error.svg';

export default ({ meta }) => {
  const { error, touched, active } = meta;

  if (touched && !active && error) {
    return (
      <div className="form__input-error-message">
        <img src={errorIcon} className="form__error-icon" alt="error" />
        <span>{error}.</span>
      </div>
    );
  }

  return null;
};
