import React from 'react';

const TogglePassword = ({ togglePassword }) => (
  <label className="auth__label" htmlFor="password-visibility-input">
    <input
      type="checkbox"
      id="password-visibility-input"
      onClick={togglePassword}
    />
    <span className="auth__label-message">show password</span>
  </label>
);

export default TogglePassword;
