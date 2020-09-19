import React from 'react';

import './SocialItem.scss';

import youtube from '../../../../../assets/icons/socials/youtube.svg';
import facebook from '../../../../../assets/icons/socials/facebook.svg';
import twitter from '../../../../../assets/icons/socials/twitter.svg';
import linkedin from '../../../../../assets/icons/socials/linkedin.svg';
import instagram from '../../../../../assets/icons/socials/instagram.svg';
import website from '../../../../../assets/icons/socials/website.svg';

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
