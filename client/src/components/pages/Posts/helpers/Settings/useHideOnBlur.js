import { useEffect, useRef } from 'react';

export default setIsSettingShown => {
  const dotsRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const { current: DOMsettings } = settingsRef;
    const { current: DOMdots } = dotsRef;

    const handleClickOutside = ({ target }) => {
      if (DOMsettings && !DOMsettings.contains(target) && target !== DOMdots) {
        setIsSettingShown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return [dotsRef, settingsRef];
};
