import React from 'react';

const ErrorMessage = ({ meta, responseError }) => {
  const { error, active, submitFailed } = meta;

  if ((submitFailed && !active && error) || responseError) {
    return (
      <div className="auth__error-message">
        <span>{error || responseError}</span>
        <span>.</span>
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
