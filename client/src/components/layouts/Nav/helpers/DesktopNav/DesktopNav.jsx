import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './DesktopNav.scss';
import logoutUser from '../../../../../redux/actions/auth/logoutUser';

const DesktopNav = ({
  auth: { isAuthenticated, user },
  logoutUser,
  navRef,
}) => {
  let content = (
    <>
      <Link to="/developers" className="desktop-nav__profiles-link">
        Developers
      </Link>
      <Link to="/login" className="desktop-nav__login-button">
        Log in
      </Link>
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
          <div className="desktop-nav__flex desktop-nav__logout-button">
            <img
              className="desktop-nav__user-image"
              src={user.photo.path}
              alt={user.fullname}
            />
            <div onClick={logoutUser} role="button">
              logout
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav className="desktop-nav" ref={navRef}>
      {content}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(DesktopNav);
