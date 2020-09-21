import React from 'react';

const HelperMessage = ({ message }) => {
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

export default HelperMessage;
