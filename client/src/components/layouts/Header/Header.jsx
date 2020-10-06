import React, { useEffect, useRef } from 'react';

import './Header.scss';
import LeftNav from './helpers/LeftNav';
import RightNav from './helpers/RightNav';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;

    document.documentElement.style.setProperty(
      '--header-height',
      `${headerHeight}px`,
    );
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__left-section">
        <LeftNav />
      </div>
      <div className="header__right-section">
        <RightNav />
      </div>
    </div>
  );
};

export default Header;
