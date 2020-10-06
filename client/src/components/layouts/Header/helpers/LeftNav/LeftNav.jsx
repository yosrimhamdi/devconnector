import React from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const LeftNav = () => {
  if (window.innerWidth < 1024) {
    return <MobileNav />;
  }
  return <DesktopNav />;
};

export default LeftNav;
