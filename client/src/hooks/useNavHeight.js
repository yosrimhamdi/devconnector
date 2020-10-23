import { useEffect } from 'react';

export default navRef => {
  useEffect(() => {
    navRef.current.style.height = `${navRef.current.offsetHeight}px`;

    setTimeout(() => {
      const navHeight = navRef.current.offsetHeight;

      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`,
      );
    }, 500);
  }, [navRef]);
};
