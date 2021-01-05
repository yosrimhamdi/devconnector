import { useEffect } from 'react';

import '../assets/styles/components/scroll-disabled.scss';

export default isModalShown => {
  useEffect(() => {
    if (isModalShown) {
      document.body.classList.add('scroll-disabled');
    } else {
      document.body.classList.remove('scroll-disabled');
    }

    return () => document.body.classList.remove('scroll-disabled');
  }, [isModalShown]);
};
