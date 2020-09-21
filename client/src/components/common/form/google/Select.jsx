import React from 'react';

import getClassName from '../helpers/getClassName';

export default ({ input, name, meta }) => {
  const className = getClassName(meta);

  return (
    <div className="form__input-group">
      <select {...input} name={name} className={className} placeholder="test">
        <option value="none">none</option>
        <option value="developer">developer</option>
        <option value="junior developer">junior developer</option>
        <option value="senior developer">senior developer</option>
        <option value="manager">manager</option>
        <option value="student">student</option>
        <option value="instructor">instructor</option>
        <option value="intern">intern</option>
        <option value="other">other</option>
      </select>
      <div className="form__input-placeholder">professional status**</div>
    </div>
  );
};
