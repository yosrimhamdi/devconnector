import React from 'react';
import classnames from 'classnames';

import './SocialInput.scss';
import youtube from '../../../../assets/icons/socials/youtube.svg';
import facebook from '../../../../assets/icons/socials/facebook.svg';
import twitter from '../../../../assets/icons/socials/twitter.svg';
import linkedin from '../../../../assets/icons/socials/linkedin.svg';
import instagram from '../../../../assets/icons/socials/instagram.svg';
import ErrorMessage from '../helpers/ErrorMessage';

const icons = { youtube, facebook, twitter, linkedin, instagram };

const IconedInput = ({ input, placeholder, meta }) => {
  const className = classnames('social-input', {
    'social-input--invalid': meta.submitFailed && !meta.active && meta.error,
  });

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
