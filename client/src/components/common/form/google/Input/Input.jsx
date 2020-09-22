import React from 'react';
import classnames from 'classnames';

import './Input.scss';
import ErrorMessage from '../../helpers/ErrorMessage';
import FieldDescription from '../fieldDescription';

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
  const className = classnames('input', {
    'inpud--invalid':
      responseError || (meta.submitFailed && !meta.active && meta.error),
  });

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
