import React from 'react';
import classnames from 'classnames';
import ErrorMessage from './helpers/ErrorMessage';

const AuthInput = ({ input, placeholder, type, meta, responseError }) => {
  const { error, active, submitFailed } = meta;

  const className = classnames('auth__input', {
    'auth__input--invalid': (submitFailed && !active && error) || responseError,
  });

  return (
    <>
      <ErrorMessage meta={meta} responseError={responseError} />
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    </>
  );
};

export default AuthInput;
