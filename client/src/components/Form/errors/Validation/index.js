import React from 'react';

export default ({ meta }) => {
  const { error, touched, active } = meta;

  if (touched && !active && error) {
    return (
      <div className="form__input-error-message">
        <i className="fas fa-exclamation-circle" /> {error}
      </div>
    );
  }

  return null;
};
