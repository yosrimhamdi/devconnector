import React from 'react';

import getClassName from './utils/getClassName';
import ValidationError from './errors/Validation';
import youtube from './icons/youtube.svg';
import facebook from './icons/facebook.svg';

const icons = { youtube, facebook };

const IconedInput = ({ input, placeholder, meta }) => {
  const className = getClassName(meta);

  return (
    <div className="form__social-input-wrapper">
      <div className="form__social-icon-wrapper">
        <img
          src={icons[input.name]}
          className="form__social-icon"
          alt={input.name}
        />
      </div>
      <input
        className={`${className} form__social-input`}
        placeholder={placeholder}
        type="text"
        {...input}
      />
      <ValidationError meta={meta} />
    </div>
  );
};

export default IconedInput;
