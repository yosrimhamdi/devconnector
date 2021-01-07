import React, { useRef } from 'react';

import MobileNav from './helpers/MobileNav';
import DesktopNav from './helpers/DesktopNav';
import useNavHeight from '../../../hooks/useNavHeight';

const Nav = () => {
  const navRef = useRef(null);

  useNavHeight(navRef);

  if (window.innerWidth < 1024) {
    return <MobileNav navRef={navRef} />;
  }

  return <DesktopNav navRef={navRef} />;
};

export default Nav;
