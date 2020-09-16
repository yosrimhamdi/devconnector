import React from 'react';

import './EducationList.scss';
import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  const renderedEducations = educations.map(education => (
    <EducationItem education={education} key={education._id} />
  ));

  return (
    <div className="education-list">
      <div className="education-list__title">education</div>
      <ul className="collection">{renderedEducations}</ul>
    </div>
  );
};

export default EducationList;
