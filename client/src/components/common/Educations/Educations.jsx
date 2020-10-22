import React from 'react';

import './Educations.scss';
import EducationItem from './helpers/EducationItem';

const EducationList = ({ educations }) => {
  if (!educations.length) {
    return null;
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <table className="educations">
      <tbody>
        <tr className="educations__header-row">
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
