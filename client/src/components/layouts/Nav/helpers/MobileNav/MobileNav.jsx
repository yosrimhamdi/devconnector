import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MobileNav.scss';
import HamburgerMenu from '../HamburgerMenu';
import Slider from '../Slider';

const MobileNav = ({ auth: { user, isAuthenticated } }) => {
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

  let left = <Link to="/developers">developers</Link>;

  if (isAuthenticated) {
    left = (
      <Link to="/dashboard" className="mobile-nav__dashboard-link">
        <img
          src={user.photo.path}
          alt={user.fullname}
          className="mobile-nav__user-photo"
        />
        <span>{user.fullname}</span>
      </Link>
    );
  }

  return (
    <nav className="mobile-nav">
      {left}
      {right}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(MobileNav);
