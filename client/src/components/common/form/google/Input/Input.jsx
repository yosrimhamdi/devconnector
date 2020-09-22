import React from 'react';

import './Input.scss';
import ErrorMessage from '../../helpers/ErrorMessage';
import FieldDescription from '../fieldDescription';
import getClassName from '../../helpers/getClassName';

const Input = ({
  input,
  type,
  placeholder,
  disabled,
  autocomplete,
  description,
  meta,
  responseError,
}) => {
  const className = getClassName(meta, responseError);

  return (
    <>
      <ErrorMessage meta={meta} responseError={responseError} />
      <div className={className}>
        <input
          className="input__field"
          placeholder="&nbsp;"
          type={type}
          disabled={disabled}
          autoComplete={autocomplete}
          {...input}
        />
        <div className="input__placeholder">{placeholder}</div>
        <FieldDescription description={description} />
      </div>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  autocomplete: 'on',
};

export default Input;
