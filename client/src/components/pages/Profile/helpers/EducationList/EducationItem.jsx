import React from 'react';

import getFormattedDate from '../../../../../utils/getFormattedDate';

const EducationItem = ({ education }) => {
  const { school, from, to, degree, fieldOfStudy } = education;
  return (
    <tr>
      <td>{school}</td>
      <td>{degree}</td>
      <td>{fieldOfStudy}</td>
      <t>{getFormattedDate(from, to)}</t>
    </tr>
  );
};

export default EducationItem;
