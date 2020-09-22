import React from 'react';

import './SocialInput.scss';
import youtube from '../../../../assets/icons/socials/youtube.svg';
import facebook from '../../../../assets/icons/socials/facebook.svg';
import twitter from '../../../../assets/icons/socials/twitter.svg';
import linkedin from '../../../../assets/icons/socials/linkedin.svg';
import instagram from '../../../../assets/icons/socials/instagram.svg';
import ErrorMessage from '../helpers/ErrorMessage';
import getClasssName from '../helpers/getClassName';

const icons = { youtube, facebook, twitter, linkedin, instagram };

const IconedInput = ({ input, placeholder, meta }) => {
  const className = getClasssName('social-input', meta);

  return (
    <>
      <ErrorMessage meta={meta} morespace />
      <div className={className}>
        <div className="social-input__icon-wrapper">
          <img
            src={icons[input.name]}
            className="social-input__icon"
            alt={input.name}
          />
        </div>
        <input
          className="social-input__field"
          placeholder="&nbsp;"
          type="text"
          {...input}
        />
        <div className="social-input__placeholder">{placeholder}</div>
      </div>
    </>
  );
};

export default IconedInput;
