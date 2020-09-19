import React from 'react';

export default ({ meta }) => {
  const { error, touched, active } = meta;

  if (touched && !active && error) {
    return (
      <div className="login__error-message">
        <span>{error}</span>
        <span>.</span>
      </div>
    );
  }

  return null;
};
