import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileLink = ({ user, profile }) => {
  let userLink = <span className="dashboard__username">{user.name}</span>;

  if (profile) {
    userLink = (
      <Link to={`/profiles/${profile.handle}`} className="dashboard__username">
        {user.name}
      </Link>
    );
  }

  return (
    <h3 className="dashboard__greeting">
      <span className="dashboard__welcome">welcome</span>
      {userLink}
    </h3>
  );
};

export default UserProfileLink;
