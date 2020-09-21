import React from 'react';

import getClassName from '../helpers/getClassName';

export default ({ input, name, placeholder, meta }) => {
  const className = getClassName(meta);

  return (
    <div className="form__input-group">
      <textarea
        style={{ resize: 'vertical' }}
        {...input}
        name={name}
        className={className}
        placeholder="&nbsp;"
      />
      <div className="form__input-placeholder form__input-placeholder--on-top">
        {placeholder}
      </div>
    </div>
  );
};
