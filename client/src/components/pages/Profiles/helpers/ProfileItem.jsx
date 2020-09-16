import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './ProfileItem.scss';
import Company from '../../../common/Company';
import getUserFirstName from '../../../../utils/getUserFirstName';

const ProfileItem = ({ profile }) => {
  const { user, handle, status, company, createdAt } = profile;

  return (
    <li className="profile-item">
      <img
        className="profile-item__image"
        src={`http://localhost:3001/images/${user.photo}`}
        alt={`${user.name}'s user avatar`}
      />
      <div className="profile-item__details">
        <div className="profile-item__user-name">
          {getUserFirstName(user.name)}
        </div>
        <div className="profile-item__date">
          joined {moment(createdAt, 'YYYYMMDD').fromNow()}
        </div>
        <div className="profile-item__user-job">
          <span className="profile-item__user-status">{status}</span>
          <Company company={company} />
        </div>
      </div>
      <div className="profile-item__button-wrapper">
        <Link to={`/profiles/${handle}`} className="profile-item__button">
          view profile
        </Link>
      </div>
    </li>
  );
};

export default ProfileItem;
