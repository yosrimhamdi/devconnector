import React from 'react';

const ToggleToDate = ({ toggleToDate }) => (
  <label htmlFor="toggle-input" className="form__toggle-to-date-label">
    <input type="checkbox" onClick={toggleToDate} id="toggle-input" />
    current job?
  </label>
);

export default ToggleToDate;
