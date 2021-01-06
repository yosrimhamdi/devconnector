import React from 'react';

import './EducationManager.scss';
import EducationItem from './helpers/EducationItem';

const EducationList = ({ educations }) => {
  if (!educations.length) {
    return null;
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <div className="education-manager">
      <div className="education-manager__header-row">
        <div>school</div>
        <div>degree</div>
        <div>years</div>
      </div>
      {renderedEducations}
    </div>
  );
};

export default EducationList;
