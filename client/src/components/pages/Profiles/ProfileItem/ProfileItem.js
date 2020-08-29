import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileItem.scss';

const ProfileItem = profile => {
  const { user, handle, status, company, location } = profile.profile;

  return (
    <div className="profile-item">
      <img
        className="profile-item__image"
        src={`http://localhost:3001/images/${user.photo}`}
        alt={`${user.name}'s user avatar`}
      />
      <div className="profile-item__details">
        <div className="profile-item__user-name">{user.name}</div>
        <div className="profile-item__user-details">
          <span className="profile-item__user-status">{status}</span> at{' '}
          <span className="profile-item__user-campany">{company}</span>
        </div>
        <div className="profile-item__user-location">{location}.</div>
        <Link className="profile-item__view-profile" to={`/profiles/${handle}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileItem;
