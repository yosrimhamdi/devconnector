import React from 'react';

import ValidationError from './helpers/errors/ValidationError';
import ResponseError from './helpers/errors/ResponseError';
import Message from './helpers/Message';
import getClassName from './helpers/getClassName';

const Input = ({
  input,
  type,
  placeholder,
  message,
  disabled,
  responseError,
  autocomplete,
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
        autocomplete={autocomplete}
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
  autocomplete: 'on',
};

export default Input;
