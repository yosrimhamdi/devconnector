import React from 'react';

import './FieldDescription.scss';

const FieldDescription = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <div className="field-description">
      <span>{description}</span>
      <span>.</span>
    </div>
  );
};

export default FieldDescription;
