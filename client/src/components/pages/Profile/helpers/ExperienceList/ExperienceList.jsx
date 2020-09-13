import React from 'react';

import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ experiences }) => {
  const renderedExps = experiences.map(experience => (
    <ExperienceItem experience={experience} key={experience._id} />
  ));

  return (
    <div className="palet">
      <div className="palet__title">experience</div>
      <ul className="collection">{renderedExps}</ul>
    </div>
  );
};

export default ExperienceList;
