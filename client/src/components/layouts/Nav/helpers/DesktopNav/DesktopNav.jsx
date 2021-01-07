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
      <Link to="/" className="desktop-nav__devconnector">
        microsoft
      </Link>
      <Link to="/login" className="desktop-nav__login-button">
        sign in
      </Link>
    </>
  );

  if (isAuthenticated) {
    content = (
      <>
        <div>
          <Link to="/profiles">developers</Link>
          <Link to="/posts">post feed</Link>
        </div>
        <div>
          <Link to="/dashboard">dashboard</Link>
          <div>
            <img src={user.photo.path} alt={user.fullname} />
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
