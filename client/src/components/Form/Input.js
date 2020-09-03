import React from 'react';
import classnames from 'classnames';

import './form.scss';
import ValidationError from './errors/Validation';
import ResponseError from './errors/Response';
import Message from './Message';

export default ({ input, type, placeholder, message, error, meta }) => {
  const className = classnames('form__input', {
    'form__input--error': meta.error && meta.touched && !meta.active,
  });

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
