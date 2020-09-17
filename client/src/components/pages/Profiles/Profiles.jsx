import React from 'react';

import './Profiles.scss';
import ProfileList from './helpers/ProfileList';
import Headline from '../../common/Headline';

const Profiles = () => (
  <div className="profiles content-wrapper">
    <Headline
      header="developer profiles"
      subHeader="Browse and connect with developers."
    />
    <ProfileList />
  </div>
);

export default Profiles;
