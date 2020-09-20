import React from 'react';

import getClassName from './helpers/getClassName';
import Message from './helpers/Message';
import ValidationError from './helpers/errors/ValidationError';

export default ({ input, name, placeholder, message, meta }) => {
  const className = getClassName(meta);

  return (
    <div className="form__input-group">
      <textarea
        style={{ resize: 'vertical' }}
        {...input}
        name={name}
        className={className}
        placeholder="&nbsp;"
      />
      <div className="form__input-placeholder form__input-placeholder--on-top">
        {placeholder}
      </div>
    </div>
  );
};
