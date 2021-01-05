import { useEffect } from 'react';

import '../assets/styles/components/scroll-disabled.scss';

export default isModalShownOrLoading => {
  useEffect(() => {
    if (isModalShownOrLoading) {
      document.body.classList.add('scroll-disabled');
    } else {
      document.body.classList.remove('scroll-disabled');
    }

    return () => document.body.classList.remove('scroll-disabled');
  }, [isModalShownOrLoading]);
};
