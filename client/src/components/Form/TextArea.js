import React from 'react';

import getClassName from './utils/getClassName';

export default ({ input, name, placeholder, meta }) => {
  const className = getClassName(meta);

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
