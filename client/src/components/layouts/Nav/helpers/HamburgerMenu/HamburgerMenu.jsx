import React from 'react';
import classnames from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ isSliderVisible, setIsSliderVisible }) => {
  const burgerMenuClass = classnames('hamburger-menu', {
    'hamburger-menu--open': isSliderVisible,
  });

  return (
    <div
      className={burgerMenuClass}
      role="button"
      onClick={() => setIsSliderVisible(!isSliderVisible)}
    >
      <div className="hamburger-menu__line" />
      <div className="hamburger-menu__line" />
      <div className="hamburger-menu__line" />
    </div>
  );
};

export default HamburgerMenu;
