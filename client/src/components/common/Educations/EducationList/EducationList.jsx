import React from 'react';

import './EducationList.scss';
import EducationItem from '../EducationItem';

const EducationList = ({ educations }) => {
  if (!educations.length) {
    return null;
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <table className="education-list">
      <tbody>
        <tr className="education-list__header-row">
          <th>school</th>
          <th>degree</th>
          <th>years</th>
        </tr>
        {renderedEducations}
      </tbody>
    </table>
  );
};

export default EducationList;
