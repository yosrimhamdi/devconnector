import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MobileNav.scss';
import HamburgerMenu from '../HamburgerMenu';
import Slider from '../Slider';
import useNavHeight from '../../../../../hooks/useNavHeight';

const MobileNav = ({ auth: { isAuthenticated } }) => {
  const navRef = useRef(null);

  const [isSliderVisible, setIsSliderVisible] = useState(false);

  useNavHeight(navRef);

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

  let left = <Link to="/profiles">developers</Link>;

  if (isAuthenticated) {
    left = (
      <Link to="/posts" className="mobile-nav__dashboard-link">
        posts feed
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
