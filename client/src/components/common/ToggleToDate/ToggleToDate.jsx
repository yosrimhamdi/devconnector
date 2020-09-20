import React from 'react';

import './ToggleToDate.scss';

const ToggleToDate = ({ toggleToDate }) => (
  <label htmlFor="toggle-input" className="toggle-to-date">
    <input type="checkbox" onClick={toggleToDate} id="toggle-input" />
    <span>current job?</span>
  </label>
);

export default ToggleToDate;
