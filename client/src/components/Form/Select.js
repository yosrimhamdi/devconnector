import React from 'react';

import getClassName from './utils/getClassName';
import ValidationError from './errors/Validation';

export default ({ input, name, meta }) => {
  const className = getClassName(meta);

  return (
    <div>
      <select {...input} name={name} className={className}>
        <option value="* select professional status">
          * select professional status
        </option>
        <option value="developer">developer</option>
        <option value="junior developer">junior developer</option>
        <option value="senior developer">senior developer</option>
        <option value="manager">manager</option>
        <option value="student">student</option>
        <option value="instructor">instructor</option>
        <option value="intern">intern</option>
        <option value="other">other</option>
      </select>
      <ValidationError meta={meta} />
    </div>
  );
};
