import { useState } from 'react';

export default () => {
  const [display, setDisplay] = useState('none');

  const toggle = () => {
    setDisplay(display === 'none' ? 'block' : 'none');
  };

  return [display, toggle];
};
