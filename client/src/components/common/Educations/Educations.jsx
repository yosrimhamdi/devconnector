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
    <div className="educations">
      <div className="educations__header-row">
        <div>school</div>
        <div>degree</div>
        <div>years</div>
      </div>
      {renderedEducations}
    </div>
  );
};

export default EducationList;
