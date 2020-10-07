import { useEffect } from 'react';

export default navRef => {
  useEffect(() => {
    const navHeight = navRef.current.clientHeight;

    document.documentElement.style.setProperty(
      '--header-height',
      `${navHeight}px`,
    );
  }, [navRef]);
};
