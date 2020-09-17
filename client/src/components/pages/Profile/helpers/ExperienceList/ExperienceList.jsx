import React from 'react';

import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ experiences }) => {
  const renderedExps = experiences.map(experience => (
    <ExperienceItem experience={experience} key={experience._id} />
  ));

  return <ul className="credentials collection">{renderedExps}</ul>;
};

export default ExperienceList;
