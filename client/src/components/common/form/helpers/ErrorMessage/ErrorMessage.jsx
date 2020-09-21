import React from 'react';

import './ErrorMessage.scss';

const ErrorMessage = ({ meta, responseError }) => {
  const { error, active, submitFailed } = meta;

  if ((submitFailed && !active && error) || responseError) {
    return (
      <div className="error-message">
        <span>{error || responseError}</span>
        <span>.</span>
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
