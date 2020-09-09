import React from 'react';

import './Socials.scss';

import youtube from './icons/youtube.svg';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import website from './icons/website.svg';

const ICONS = { website, youtube, facebook, twitter, linkedin, instagram };

const Socials = ({ socials = {} }) => {
  const socialsArray = Object.entries(socials);

  const renderedSocials = socialsArray.map(([social, link], i) => (
    <a
      className="socials__link"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      key={i}
    >
      <img src={ICONS[social]} alt="webiste logo" className="socials__icon" />
    </a>
  ));

  return <div>{renderedSocials}</div>;
};

export default Socials;
