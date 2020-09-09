import React from 'react';

import youtube from '../icons/youtube.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';
import website from '../icons/website.svg';

const ICONS = { website, youtube, facebook, twitter, linkedin, instagram };

const Socials = ({ socials = {} }) => {
  const renderedSocials = Object.entries(socials).map(([social, link], i) => (
    <a href={link} rel="noopener noreferrer" target="_blank" key={i}>
      <img src={ICONS[social]} alt="webiste logo" className="profile__icon" />
    </a>
  ));

  return <div>{renderedSocials}</div>;
};

export default Socials;
