import React from 'react';

import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  const renderedEducations = educations.map(education => (
    <EducationItem education={education} key={education._id} />
  ));

  return <ul className="credentials">{renderedEducations}</ul>;
};

export default EducationList;
