import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileItem.scss';

import Skills from '../Skills';
import Company from '../../../../common/Company';

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
          <Company company={company} />
        </div>
        <div className="profile-item__user-location">{location}</div>
        <Link to={`/profiles/${handle}`} className="link">
          new profile
        </Link>
      </div>
      <Skills skills={skills} />
    </li>
  );
};

export default ProfileItem;
