import React from 'react';

import EducationItem from './EducationItem';

const Educations = ({ educations }) => {
  const renderedEducations = educations.map(education => (
    <EducationItem education={education} key={education._id} />
  ));

  return (
    <div className="palet">
      <div className="palet__title">education</div>
      <ul className="collection">{renderedEducations}</ul>
    </div>
  );
};

export default Educations;
