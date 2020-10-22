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
    <table className="experiences">
      <tbody>
        <tr className="experiences__header-row">
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
