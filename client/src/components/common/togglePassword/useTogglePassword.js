import { useState } from 'react';

export default () => {
  const [type, setType] = useState('password');

  const togglePassword = () =>
    type === 'password' ? setType('text') : setType('password');

  return [type, togglePassword];
};
