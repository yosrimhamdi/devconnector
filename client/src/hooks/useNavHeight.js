import { useEffect } from 'react';

export default navRef => {
  useEffect(() => {
    const navHeight = navRef.current.clientHeight;

    document.documentElement.style.setProperty(
      '--nav-height',
      `${navHeight}px`,
    );
  }, [navRef]);
};
