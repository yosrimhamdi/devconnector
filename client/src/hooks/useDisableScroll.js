import { useEffect } from 'react';

import '../assets/styles/components/scroll-disabled.scss';

const disableScroll = () => {
  if (document.body.clientHeight > window.innerHeight) {
    document.body.classList.add('scroll-disabled', 'prevent-jump');
  } else {
    document.body.classList.add('scroll-disabled');
  }
};

const enableScroll = () => {
  document.body.classList.remove('scroll-disabled', 'prevent-jump');
};

export default isModalShownOrLoading => {
  useEffect(() => {
    if (isModalShownOrLoading) {
      disableScroll();
    } else {
      enableScroll();
    }

    return enableScroll;
  }, [isModalShownOrLoading]);
};
