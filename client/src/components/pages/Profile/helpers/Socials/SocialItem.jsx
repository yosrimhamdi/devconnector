import React from 'react';

import './SocialItem.scss';

import youtube from '../../../../../assets/icons/youtube.svg';
import facebook from '../../../../../assets/icons/facebook.svg';
import twitter from '../../../../../assets/icons/twitter.svg';
import linkedin from '../../../../../assets/icons/linkedin.svg';
import instagram from '../../../../../assets/icons/instagram.svg';
import website from '../../../../../assets/icons/website.svg';

const ICONS = { website, youtube, facebook, twitter, linkedin, instagram };

const SocialItem = ({ socialName, link }) => (
  <a
    className="social-item__link"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      src={ICONS[socialName]}
      alt="webiste logo"
      className="social-item__icon"
    />
  </a>
);

export default SocialItem;
