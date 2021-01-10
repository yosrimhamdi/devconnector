import React from 'react';

import MobileNav from './helpers/MobileNav';
import DesktopNav from './helpers/DesktopNav';

const Nav = ({ isProfiles }) => {
  console.log(isProfiles);
  if (window.innerWidth < 1024) {
    return <MobileNav />;
  }

  return <DesktopNav isProfiles={isProfiles} />;
};

export default Nav;
