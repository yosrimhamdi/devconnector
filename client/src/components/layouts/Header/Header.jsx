import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Navigation from './helpers/Navigation';

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
        <Link to="/" className="header__devconnector">
          devConnector
        </Link>
        {/* <Link to="/profiles" className="header__link">
          developers
        </Link> */}
      </div>
      <div className="header__right-section">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
