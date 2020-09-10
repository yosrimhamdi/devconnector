import React from 'react';

import getClassName from './helpers/getClassName';
import Message from './helpers/Message';
import ValidationError from './errors/Validation';

export default ({ input, name, placeholder, message, meta }) => {
  const className = getClassName(meta);

  return (
    <div>
      <textarea
        {...input}
        name={name}
        className={className}
        placeholder={placeholder}
      />
      <Message message={message} />
      <ValidationError meta={meta} />
    </div>
  );
};
