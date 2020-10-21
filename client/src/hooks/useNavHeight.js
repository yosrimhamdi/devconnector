import { useEffect } from 'react';

export default navRef => {
  useEffect(() => {
    setTimeout(() => {
      const navHeight = navRef.current.offsetHeight;

      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`,
      );
    }, 500);
  }, [navRef]);
};
