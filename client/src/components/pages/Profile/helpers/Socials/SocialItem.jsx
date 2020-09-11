import React from 'react';

import './SocialItem.scss';

import youtube from '../icons/youtube.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';
import website from '../icons/website.svg';

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
