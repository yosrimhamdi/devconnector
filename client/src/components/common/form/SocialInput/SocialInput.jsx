import React from 'react';

import './SocialInput.scss';
import getClassName from '../helpers/getClassName';
import youtube from '../../../../assets/icons/socials/youtube.svg';
import facebook from '../../../../assets/icons/socials/facebook.svg';
import twitter from '../../../../assets/icons/socials/twitter.svg';
import linkedin from '../../../../assets/icons/socials/linkedin.svg';
import instagram from '../../../../assets/icons/socials/instagram.svg';
import ErrorMessage from '../helpers/ErrorMessage';

const icons = { youtube, facebook, twitter, linkedin, instagram };

const IconedInput = ({ input, placeholder, meta }) => {
  const className = getClassName(meta);

  return (
    <>
      <ErrorMessage meta={meta} morespace />
      <div
        className={`${className} form__input-wrapper--mb-small  social-input`}
      >
        <div className="social-input__icon-wrapper">
          <img
            src={icons[input.name]}
            className="social-input__icon"
            alt={input.name}
          />
        </div>
        <input
          className="form__input social-input__input"
          placeholder="&nbsp;"
          type="text"
          {...input}
        />
        <div className="form__input-placeholder form__input-placeholder--to-left">
          {placeholder}
        </div>
      </div>
    </>
  );
};

export default IconedInput;
