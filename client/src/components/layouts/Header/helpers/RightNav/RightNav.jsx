import React from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const RightNav = () => {
  if (window.innerWidth < 1024) {
    return <MobileNav />;
  }

  return <DesktopNav />;
};

export default RightNav;
