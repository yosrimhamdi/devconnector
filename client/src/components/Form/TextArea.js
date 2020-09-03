import React from 'react';
import classnames from 'classnames';

export default ({ input, name, placeholder, meta }) => {
  const className = classnames('form__input', {
    'form__input--error': meta.error && meta.touched && !meta.active,
  });

  return (
    <div>
      <textarea
        {...input}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};
