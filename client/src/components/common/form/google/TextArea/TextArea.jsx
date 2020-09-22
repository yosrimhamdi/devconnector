import React from 'react';
import InputDescription from '../InputDescription';

import './TextArea.scss';

const TextArea = ({ input, name, placeholder, description }) => (
  <div className="text-area">
    <textarea
      style={{ resize: 'vertical' }}
      {...input}
      name={name}
      className="text-area__input"
      spellCheck="false"
      placeholder="&nbsp;"
    />
    <div className="text-area__placeholder">{placeholder}</div>
    <InputDescription description={description} />
  </div>
);

export default TextArea;
