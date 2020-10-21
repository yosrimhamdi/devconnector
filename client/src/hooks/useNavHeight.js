import { useEffect } from 'react';

export default navRef => {
  useEffect(() => {
    setTimeout(() => {
      const navHeight = navRef.current.offsetHeight;

      console.log(navHeight);

      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`,
      );
    }, 500);
  }, [navRef]);
};
