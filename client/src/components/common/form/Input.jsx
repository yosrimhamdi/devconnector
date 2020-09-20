import React from 'react';

const Input = ({ input, type, placeholder, disabled, autocomplete }) => {
  return (
    <div className="form__input-group">
      <input
        className="form__input"
        placeholder="&nbsp;"
        type={type}
        disabled={disabled}
        autoComplete={autocomplete}
        {...input}
      />
      <div className="form__input-placeholder">{placeholder}</div>
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  autocomplete: 'on',
};

export default Input;
