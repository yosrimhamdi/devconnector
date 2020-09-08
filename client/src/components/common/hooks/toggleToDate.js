import { useState } from 'react';

export default () => {
  const [disabled, setDisabled] = useState(false);

  const toggleToDate = () => {
    setDisabled(!disabled);
  };

  return [disabled, toggleToDate];
};
