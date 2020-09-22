import React from 'react';

import './Input.scss';
import ErrorMessage from '../../helpers/ErrorMessage';
import FieldDescription from '../fieldDescription';
import getClassName from '../../helpers/getClassName';

const Input = ({
  input,
  type,
  placeholder,
  autocomplete,
  description,
  meta,
  responseError,
  marginBottom,
}) => {
  const className = getClassName('input', meta, responseError);

  return (
    <>
      <ErrorMessage meta={meta} responseError={responseError} />
      <div className={className} style={{ marginBottom }}>
        <input
          className="input__field"
          placeholder="&nbsp;"
          type={type}
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
