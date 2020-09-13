import React from 'react';

import getClassName from './helpers/getClassName';
import ValidationError from './helpers/errors/ValidationError';

import youtube from './icons/youtube.svg';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';

const icons = { youtube, facebook, twitter, linkedin, instagram };

const IconedInput = ({ input, placeholder, meta }) => {
  const className = getClassName(meta);

  return (
    <div>
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
      </div>
      <ValidationError meta={meta} />
    </div>
  );
};

export default IconedInput;
