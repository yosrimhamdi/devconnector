import { useState } from 'react';

export default () => {
  const [display, setDisplay] = useState('none');
  const [message, setMessage] = useState('show');

  const toggleSocials = () => {
    setDisplay(display === 'none' ? 'block' : 'none');
    setMessage(message === 'show' ? 'hide' : 'show');
  };

  return [display, message, toggleSocials];
};
