import React from 'react';

import ErrorMessage from '../helpers/ErrorMessage';
import InputDescription from '../helpers/InputDescription';
import getClassName from '../helpers/getClassName';

const Input = ({
  input,
  type,
  placeholder,
  disabled,
  autocomplete,
  description,
  meta,
}) => {
  const className = getClassName(meta);

  return (
    <>
      <ErrorMessage meta={meta} />
      <div className={className}>
        <input
          className="form__input"
          placeholder="&nbsp;"
          type={type}
          disabled={disabled}
          autoComplete={autocomplete}
          {...input}
        />
        <div className="form__input-placeholder">{placeholder}</div>
        <InputDescription description={description} />
      </div>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  autocomplete: 'on',
};

export default Input;
