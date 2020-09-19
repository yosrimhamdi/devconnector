import React from 'react';

const ErrorMessage = ({ meta }) => {
  const { error, touched, active } = meta;

  if (touched && !active && error) {
    return (
      <div className="auth__error-message">
        <span>{error}</span>
        <span>.</span>
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
