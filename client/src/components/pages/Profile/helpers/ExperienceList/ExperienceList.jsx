import React from 'react';

import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ experiences }) => {
  const renderedExps = experiences.map(experience => (
    <ExperienceItem experience={experience} key={experience._id} />
  ));

  return <ul className="credentials">{renderedExps}</ul>;
};

export default ExperienceList;
