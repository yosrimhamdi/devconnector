import React from 'react';

import './ProfileItem.scss';

import CostumLink from '../../../../common/CostumLink';
import Skills from '../Skills';

const ProfileItem = ({ profile }) => {
  const { user, handle, status, company, location, skills } = profile;

  return (
    <li className="profile-item">
      <img
        className="profile-item__image"
        src={`http://localhost:3001/images/${user.photo}`}
        alt={`${user.name}'s user avatar`}
      />
      <div className="profile-item__user-details">
        <div className="profile-item__user-name">{user.name}</div>
        <div className="profile-item__user-job-details">
          <span className="profile-item__user-status">{status}</span>
          <span className="profile-item__user-campany">{` at ${company}`}</span>
        </div>
        <div className="profile-item__user-location">{location}</div>
        <CostumLink text="view profile" to={`/profiles/${handle}`} />
      </div>
      <Skills skills={skills} />
    </li>
  );
};

export default ProfileItem;
