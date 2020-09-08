import React from 'react';

import './form.scss';
import ValidationError from './errors/Validation';
import ResponseError from './errors/Response';
import Message from './utils/Message';
import getClassName from './utils/getClassName';

const Input = ({
  input,
  type,
  placeholder,
  message,
  disabled,
  responseError,
  meta,
}) => {
  const className = getClassName(meta, responseError);

  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        {...input}
      />
      <Message message={message} />
      <ValidationError meta={meta} />
      <ResponseError responseError={responseError} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
