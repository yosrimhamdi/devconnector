import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './ProfilesLink.scss';
import cube from './cube.svg';
import ProfilesContext from '../../../contexts/ProfilesContext';

const ProfilesLink = () => {
  const isProfiles = useContext(ProfilesContext);

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
