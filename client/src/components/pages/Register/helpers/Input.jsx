import React from 'react';
import classnames from 'classnames';
import ValidationError from './ValidationError';

const Input = ({ input, placeholder, type, meta }) => {
  const className = classnames('login__input', {
    'login__input--invalid': meta.error,
  });

  return (
    <div>
      <ValidationError meta={meta} />
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
