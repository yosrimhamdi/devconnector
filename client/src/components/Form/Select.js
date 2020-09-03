import React from 'react';
import classnames from 'classnames';

export default ({ input, name, meta }) => {
  const className = classnames('form__input', {
    'form__input--error': meta.error && meta.touched && !meta.active,
  });

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
        <option value="other">intern</option>
      </select>
    </div>
  );
};
