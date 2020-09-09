import React from 'react';

import './ProfileItem.scss';
import CostumLink from '../../../common/CostumLink';
import SkillList from './SkillList';

const ProfileItem = profile => {
  const { user, handle, status, company, location, skills } = profile.profile;

  return (
    <div className="profile-item">
      <img
        className="profile-item__image"
        src={`http://localhost:3001/images/${user.photo}`}
        alt={`${user.name}'s user avatar`}
      />
      <div className="profile-item__user-details">
        <div className="profile-item__user-name">{user.name}</div>
        <div className="profile-item__user-job-details">
          <span className="profile-item__user-status">{status}</span> at
          <span className="profile-item__user-campany">{company}</span>
        </div>
        <div className="profile-item__user-location">{location}.</div>
        <CostumLink
          bgColor="#17a2b8"
          colro="white"
          text="view profile"
          to={`/profiles/${handle}`}
        />
      </div>
      <SkillList skills={skills} />
    </div>
  );
};

export default ProfileItem;
