import React from 'react';

import './Spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <div className="spinner__container">
      <i className="fas fa-circle-notch spinner__circle" />
      <div className="spinner__message">loading...</div>
    </div>
  </div>
);

export default Spinner;
