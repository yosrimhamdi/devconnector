import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import './DesktopNav.scss';
import { logoutUser } from '../../../../../redux/actions';
import useNavHeight from '../../../../../hooks/useNavHeight';

const DesktopNav = ({ auth: { isAuthenticated, user }, logoutUser }) => {
  const navRef = useRef(null);

  useNavHeight(navRef);

  const left = (
    <div className="desktop-nav__section">
      <Link to="/">devConnector</Link>
      <NavLink
        to="/profiles"
        className="desktop-nav__link"
        activeClassName="desktop-nav__link--active"
      >
        developers
      </NavLink>
    </div>
  );

  let right = (
    <div className="desktop-nav__section">
      <NavLink
        to="/signup"
        className="desktop-nav__link"
        activeClassName="desktop-nav__link--active"
      >
        sign up
      </NavLink>
      <NavLink
        to="/login"
        className="desktop-nav__link"
        activeClassName="desktop-nav__link--active"
      >
        login
      </NavLink>
    </div>
  );

  if (isAuthenticated) {
    right = (
      <div className="desktop-nav__section">
        <NavLink
          to="/posts"
          className="desktop-nav__link"
          activeClassName="desktop-nav__link--active"
        >
          post feed
        </NavLink>
        <NavLink
          to="/dashboard"
          className="desktop-nav__link"
          activeClassName="desktop-nav__link--active"
        >
          dashboard
        </NavLink>
        <div className="desktop-nav__logout-container">
          <img
            className="desktop-nav__user-image"
            src={`/images/${user.photo}`}
            alt={user.fullname}
          />
          <div className="desktop-nav__link" onClick={logoutUser} role="button">
            logout
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="desktop-nav" ref={navRef}>
      {left}
      {right}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(DesktopNav);
