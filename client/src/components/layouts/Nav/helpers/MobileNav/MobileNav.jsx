import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MobileNav.scss';
import HamburgerMenu from '../HamburgerMenu';
import logoutUser from '../../../../../redux/actions/auth/logoutUser';
import Slider from '../Slider';

const MobileNav = ({ auth: { isAuthenticated }, logoutUser }) => {
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
        <Slider
          isSliderVisible={isSliderVisible}
          setIsSliderVisible={setIsSliderVisible}
        />
        <div role="button" onClick={logoutUser}>
          logout
        </div>
        <HamburgerMenu
          isSliderVisible={isSliderVisible}
          setIsSliderVisible={setIsSliderVisible}
        />
      </>
    );
  }

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__content-wrapper">{content}</div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(MobileNav);
