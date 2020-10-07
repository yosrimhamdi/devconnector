import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MobileNav.scss';
import HamburgerMenu from '../HamburgerMenu';
import Slider from '../Slider';
import useNavHeight from '../../../../../hooks/useNavHeight';

const MobileNav = ({ auth: { user, isAuthenticated } }) => {
  const navRef = useRef(null);

  useNavHeight(navRef);

  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const right = (
    <>
      <HamburgerMenu
        isSliderVisible={isSliderVisible}
        setIsSliderVisible={setIsSliderVisible}
      />
      <Slider
        isSliderVisible={isSliderVisible}
        setIsSliderVisible={setIsSliderVisible}
      />
    </>
  );

  let left = <Link to="/">devConnector</Link>;

  if (isAuthenticated) {
    left = (
      <Link to="/dashboard" className="mobile-nav__dashboard-link">
        <img
          src={`/images/${user.photo}`}
          alt={user.fullname}
          className="mobile-nav__user-photo"
        />
        <span>{user.fullname}</span>
      </Link>
    );
  }

  return (
    <nav className="mobile-nav" ref={navRef}>
      {left}
      {right}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(MobileNav);
