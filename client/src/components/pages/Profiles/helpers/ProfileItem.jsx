import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './ProfileItem.scss';
import Company from '../../../common/Company';

const ProfileItem = ({ profile, i }) => {
  const { user, handle, status, company } = profile;

  const className = classnames('profile-item', {
    'profile-item--admin': user.role === 'admin',
  });

  const timing = 120;

  const style = {
    animation: `zoom ${timing}ms forwards ${(i % 6) * timing}ms`,
  };

  return (
    <li className={className} style={style}>
      <img
        className="profile-item__image"
        src={`/images/${user.photo}`}
        alt={user.fullname}
      />
      <div className="profile-item__user-name">{user.fullname}</div>
      <div className="profile-item__user-job">
        <span className="profile-item__user-status">{status}</span>
        <Company company={company} />
      </div>
      <Link to={`/profiles/${handle}`} className="profile-item__button">
        view profile
      </Link>
    </li>
  );
};

export default ProfileItem;
