import React from 'react';

import './ExperienceList.scss';
import ExperienceItem from '../ExperienceItem';

const ExperienceList = ({ experiences }) => {
  if (!experiences.length) {
    return null;
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <table className="experience-list">
      <tbody>
        <tr className="experience-list__header-row">
          <th>company</th>
          <th>title</th>
          <th>year</th>
        </tr>
        {renderedExperiences}
      </tbody>
    </table>
  );
};

export default ExperienceList;
