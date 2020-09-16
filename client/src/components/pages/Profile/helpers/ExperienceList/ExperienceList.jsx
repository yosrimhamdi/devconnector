import React from 'react';

import './ExperienceList.scss';
import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ experiences }) => {
  const renderedExps = experiences.map(experience => (
    <ExperienceItem experience={experience} key={experience._id} />
  ));

  return (
    <div className="experience-list">
      <div className="experience-list__title">experience</div>
      <ul className="collection">{renderedExps}</ul>
    </div>
  );
};

export default ExperienceList;
