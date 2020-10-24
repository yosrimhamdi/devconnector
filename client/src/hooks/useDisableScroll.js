import { useEffect } from 'react';

export default loading => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [loading]);
};
