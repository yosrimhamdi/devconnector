import React from 'react';

export default ({ responseError }) => {
  if (!responseError) {
    return null;
  }

  return (
    <div className="form__input-error-message">
      <i className="fas fa-exclamation-circle" /> {responseError}
    </div>
  );
};
