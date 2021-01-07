import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MobileNav.scss';
import HamburgerMenu from '../HamburgerMenu';
import Slider from '../Slider';

const MobileNav = ({ auth: { isAuthenticated }, navRef }) => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  let content = (
    <>
      <Link to="/profiles">developers</Link>
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

  if (isAuthenticated) {
    content = (
      <>
        <HamburgerMenu
          isSliderVisible={isSliderVisible}
          setIsSliderVisible={setIsSliderVisible}
        />
        <Slider
          isSliderVisible={isSliderVisible}
          setIsSliderVisible={setIsSliderVisible}
        />
        <Link to="/posts" className="mobile-nav__dashboard-link">
          posts feed
        </Link>
      </>
    );
  }

  return (
    <nav className="mobile-nav" ref={navRef}>
      {content}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(MobileNav);
