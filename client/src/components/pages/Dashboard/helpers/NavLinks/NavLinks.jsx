import React from 'react';
import { Link } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => (
  <div className="nav-links">
    <div className="nav-links__wrapper">
      <Link to="/profiles/experience/new" className="nav-links__link">
        <span>add experience</span>
      </Link>
      <Link to="/profiles/education/new" className="nav-links__link">
        <span>add education</span>
      </Link>
      <Link to="/profiles/update" className="nav-links__link">
        <span>update profile</span>
      </Link>
    </div>
  </div>
);

export default NavLinks;
