import React from 'react';

import './Profiles.scss';
import ProfileList from './helpers/ProfileList';
import Pagination from '../../common/Pagination';

const Profiles = () => (
  <div className="profiles">
    <ProfileList />
    <Pagination />
  </div>
);

export default Profiles;
