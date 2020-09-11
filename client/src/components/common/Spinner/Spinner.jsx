import React from 'react';

import circle from './circle.svg';
import './Spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <div className="spinner__container">
      <img src={circle} className="spinner__circle" alt="loading" />
      <div className="spinner__message">loading...</div>
    </div>
  </div>
);

export default Spinner;
