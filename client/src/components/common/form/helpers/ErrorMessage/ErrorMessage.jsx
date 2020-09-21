import React from 'react';
import classnames from 'classnames';

import './ErrorMessage.scss';

const ErrorMessage = ({ meta, responseError, morespace }) => {
  const { error, active, submitFailed } = meta;

  const className = classnames('error-message', {
    'error-message--mb': morespace,
  });

  if ((submitFailed && !active && error) || responseError) {
    return (
      <div className={className}>
        <span>{error || responseError}</span>
        <span>.</span>
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
