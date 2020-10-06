import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './MobileNav.scss';
import menu from './menu.svg';

const MobileNav = ({ auth }) => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onDocClick = e => {
      if (!e.target.contains(navRef.current) && e.target !== menuRef.current) {
        setVisible(false);
      }
    };

    document.addEventListener('click', onDocClick);

    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const className = classnames('mobile-nav__nav', {
    'mobile-nav__nav--visible': visible,
  });

  let links = (
    <>
      <NavLink to="/profiles" activeClassName="mobile-nav__active-link">
        developers
      </NavLink>
      <NavLink to="/login" activeClassName="mobile-nav__active-link">
        login
      </NavLink>
      <NavLink to="/signup" activeClassName="mobile-nav__active-link">
        sign up
      </NavLink>
    </>
  );

  if (auth.isAuthenticated) {
    links = (
      <>
        <NavLink to="/dashboard" activeClassName="mobile-nav__active-link">
          dashboard
        </NavLink>
        <NavLink to="/posts" activeClassName="mobile-nav__active-link">
          posts feed
        </NavLink>
        <NavLink to="/profiles" activeClassName="mobile-nav__active-link">
          developers
        </NavLink>
      </>
    );
  }

  return (
    <div className="mobile-nav">
      <img
        src={menu}
        alt="hamburger menu"
        className="mobile-nav__hamburger-menu"
        onClick={() => setVisible(!visible)}
        ref={menuRef}
      />
      <div className={className} ref={navRef}>
        <div
          className="mobile-nav__links-wrapper"
          role="button"
          onClick={() => setVisible(false)}
        >
          {links}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(MobileNav);
