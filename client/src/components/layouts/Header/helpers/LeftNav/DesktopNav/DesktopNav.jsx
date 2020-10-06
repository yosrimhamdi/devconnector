import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <>
      <Link to="/" className="header__devconnector">
        devConnector
      </Link>
      <Link to="/profiles" className="header__link">
        developers
      </Link>
    </>
  );
};

export default DesktopNav;
