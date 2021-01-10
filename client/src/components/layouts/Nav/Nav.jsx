import React from 'react';

import MobileNav from './helpers/MobileNav';
import DesktopNav from './helpers/DesktopNav';

const Nav = () => {
  if (window.innerWidth < 1024) {
    return <MobileNav />;
  }

  return <DesktopNav />;
};

export default Nav;
