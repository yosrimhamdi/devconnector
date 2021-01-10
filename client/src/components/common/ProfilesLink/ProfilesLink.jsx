import React from 'react';
import { Link } from 'react-router-dom';

import './ProfilesLink.scss';
import cube from './cube.svg';

const ProfilesLink = ({ isProfiles }) => {
  if (isProfiles) {
    return <div />;
  }

  return (
    <Link to="/profiles" className="profiles-link">
      <img src={cube} alt="cube logo" className="profiles-link__cube-logo" />
      <span>developers</span>
    </Link>
  );
};

export default ProfilesLink;
