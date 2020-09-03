import React from 'react';

export default ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="form__input-error-message">
      <i className="fas fa-exclamation-circle" /> {error}
    </div>
  );
};
