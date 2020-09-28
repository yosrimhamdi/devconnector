import React from 'react';
import ErrorMessage from '../helpers/ErrorMessage';
import getClasssName from '../helpers/getClassName';

const AuthInput = ({ input, placeholder, type, meta, responseError }) => {
  const className = getClasssName('auth__input', meta, responseError);

  return (
    <div>
      <ErrorMessage meta={meta} responseError={responseError} />
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
        autoComplete="on"
      />
    </div>
  );
};

export default AuthInput;
