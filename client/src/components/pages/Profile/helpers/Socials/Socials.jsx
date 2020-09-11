import React from 'react';

import SocialItem from './SocialItem';

const Socials = ({ socials = {} }) => {
  const renderedSocials = Object.entries(socials).map(([socialName, link]) => (
    <SocialItem
      socialName={socialName}
      link={link}
      key={`${socialName}-${link}`}
    />
  ));

  return <ul>{renderedSocials}</ul>;
};

export default Socials;
