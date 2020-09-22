import React from 'react';
import FieldDescription from '../fieldDescription';

import './TextArea.scss';

const TextArea = ({ input, name, placeholder, description }) => (
  <div className="text-area">
    <textarea
      style={{ resize: 'vertical' }}
      {...input}
      name={name}
      className="text-area__field"
      spellCheck="false"
      placeholder="&nbsp;"
    />
    <div className="text-area__placeholder">{placeholder}</div>
    <FieldDescription description={description} />
  </div>
);

export default TextArea;
