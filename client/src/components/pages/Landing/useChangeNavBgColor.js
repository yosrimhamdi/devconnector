import { useEffect } from 'react';

const changeColor = varName => {
  document.documentElement.style.setProperty(
    '--nav-bg-color',
    `var(${varName})`,
  );
};

export default () => {
  useEffect(() => {
    changeColor('--white-bg-color');

    return changeColor.bind(null, '--black-bg-color');
  }, []);
};
