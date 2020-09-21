import React from 'react';

import './InputDescription.scss';

const InputDescription = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <div className="input-description">
      <span>{description}</span>
      <span>.</span>
    </div>
  );
};

export default InputDescription;
