import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './MobileNav.scss';

const MobileNav = ({ auth: { user, isAuthenticated } }) => {
  if (isAuthenticated) {
    return (
      <Link to="/dashboard" className="dashboard-link">
        <img
          src={`/images/${user.photo}`}
          alt={user.fullname}
          className="dashboard-link__user-photo"
        />
        <span>{user.fullname}</span>
      </Link>
    );
  }
  return <Link to="/">devConnector</Link>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(MobileNav);
