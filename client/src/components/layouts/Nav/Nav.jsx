import React from 'react';

import MobileNav from './helpers/MobileNav';
import DesktopNav from './helpers/DesktopNav';

const Nav = () => {
  // const navRef = useRef(null);

  /*   useEffect(() => {
    const headerHeight = navRef.current.clientHeight;

    document.documentElement.style.setProperty(
      '--header-height',
      `${headerHeight}px`,
    );
  }, []); */

  if (window.innerWidth < 1024) {
    return <MobileNav />;
  }

  return <DesktopNav />;
};

export default Nav;
