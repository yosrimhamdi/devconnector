import React from 'react';

import './form.scss';
import ValidationError from './errors/Validation';
import ResponseError from './errors/Response';
import Message from './Message';
import getClassName from './utils/getClassName';

export default ({ input, type, placeholder, message, error, meta }) => {
  const className = getClassName(meta, error);

  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        {...input}
      />
      <Message message={message} />
      <ValidationError meta={meta} />
      <ResponseError error={error} />
    </div>
  );
};
