import React from 'react';
import classnames from 'classnames';

import './Select.scss';
import ErrorMessage from '../../helpers/ErrorMessage';

const Select = ({ input, name, meta }) => {
  const className = classnames('input', {
    'inpud--invalid': meta.submitFailed && !meta.active && meta.error,
  });

  return (
    <>
      <ErrorMessage meta={meta} />
      <div className={`${className} select`}>
        <select {...input} name={name} className="select__field">
          <option value="professional status**">Professional status**</option>
          <option value="developer">Developer</option>
          <option value="junior developer">Junior developer</option>
          <option value="senior developer">Senior developer</option>
          <option value="manager">Manager</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="intern">Intern</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  );
};

export default Select;
