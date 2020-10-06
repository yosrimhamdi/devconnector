import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './MobileNav.scss';

import { logoutUser } from '../../../../../../redux/actions';

const MobileNav = ({ auth, logoutUser }) => {
  const slideNavRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onDocClick = ({ target }) => {
      if (
        target !== slideNavRef.current &&
        !target.classList.contains('mobile-nav__burger-line')
      ) {
        setVisible(false);
      }
    };

    document.addEventListener('click', onDocClick);

    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const slideNavClass = classnames('mobile-nav__slide-nav', {
    'mobile-nav__slide-nav--visible': visible,
  });

  const burgerMenuClass = classnames('mobile-nav__burger-menu', {
    'mobile-nav__burger-menu--open': visible,
  });

  let slideNavLinks = (
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
    slideNavLinks = (
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
        <div className="mobile-nav__logout" role="button" onClick={logoutUser}>
          logout
        </div>
      </>
    );
  }

  return (
    <nav className="mobile-nav">
      <div
        className={burgerMenuClass}
        role="button"
        onClick={() => setVisible(!visible)}
      >
        <div className="mobile-nav__burger-line" />
        <div className="mobile-nav__burger-line" />
        <div className="mobile-nav__burger-line" />
      </div>
      <div className={slideNavClass} ref={slideNavRef}>
        <div
          className="mobile-nav__links-wrapper"
          role="button"
          onClick={() => setVisible(false)}
        >
          {slideNavLinks}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(MobileNav);
