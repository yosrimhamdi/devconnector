import React from 'react';

export default ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="form__input-message">
      <span>{message}</span>
      <span>.</span>
    </div>
  );
};