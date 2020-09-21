import React from 'react';
import InputDescription from '../helpers/InputDescription';

const TextArea = ({ input, name, placeholder, description }) => (
  <div className="form__input-wrapper">
    <textarea
      style={{ resize: 'vertical' }}
      {...input}
      name={name}
      className="form__input"
      placeholder="&nbsp;"
    />
    <div className="form__input-placeholder form__input-placeholder--on-top">
      {placeholder}
    </div>
    <InputDescription description={description} />
  </div>
);

export default TextArea;
