import React from 'react';

import './Profiles.scss';
import ProfileList from './ProfileList';
import Headline from '../../Headline';

const Profiles = () => (
  <div className="profiles">
    <Headline
      header="developer profiles"
      subHeader="Browse and connect with developers."
    />
    <ProfileList />
  </div>
);

export default Profiles;
