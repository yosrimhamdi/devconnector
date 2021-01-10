import { useEffect } from 'react';

export default nav =>
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--nav-height',
      `${nav.current.offsetHeight}px`,
    );
  }, []);
