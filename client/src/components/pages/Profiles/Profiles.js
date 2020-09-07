import React from 'react';

import ProfileList from './ProfileList';
import Headline from '../../common/Headline';

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
