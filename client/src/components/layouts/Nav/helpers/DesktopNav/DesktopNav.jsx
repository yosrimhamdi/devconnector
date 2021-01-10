import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './DesktopNav.scss';
import logoutUser from '../../../../../redux/actions/auth/logoutUser';

const DesktopNav = ({ auth: { isAuthenticated, user }, logoutUser }) => {
  let content = (
    <>
      <Link to="/profiles">developers</Link>
      <Link to="/login">log in</Link>
    </>
  );

  if (isAuthenticated) {
    content = (
      <>
        <div className="desktop-nav__flex">
          <Link to="/profiles">developers</Link>
          <Link to="/posts">post feed</Link>
        </div>
        <div className="desktop-nav__flex">
          <Link to="/dashboard">dashboard</Link>
          <div className="desktop-nav__flex">
            <img
              className="desktop-nav__user-image"
              src={user.photo.path}
              alt={user.fullname}
            />
            <span
              className="desktop-nav__logout-button"
              onClick={logoutUser}
              role="button"
            >
              logout
            </span>
          </div>
        </div>
      </>
    );
  }

  return <nav className="desktop-nav">{content}</nav>;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(DesktopNav);
