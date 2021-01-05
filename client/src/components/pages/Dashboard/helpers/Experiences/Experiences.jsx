import React from 'react';

import './Experiences.scss';
import ExperienceItem from './helpers/ExperienceItem';

const ExperienceList = ({ experiences }) => {
  if (!experiences.length) {
    return null;
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <div className="experiences">
      <div className="experiences__header-row">
        <div>company</div>
        <div>title</div>
        <div>year</div>
      </div>
      {renderedExperiences}
    </div>
  );
};

export default ExperienceList;
