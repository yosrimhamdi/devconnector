import React from 'react';
import classnames from 'classnames';
import ErrorMessage from './helpers/errors/ErrorMessage';

const Input = ({ input, placeholder, type, meta }) => {
  const className = classnames('auth__input', {
    'auth__input--invalid': meta.error,
  });

  return (
    <div>
      <ErrorMessage meta={meta} />
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </div>
  );
};

export default Input;
