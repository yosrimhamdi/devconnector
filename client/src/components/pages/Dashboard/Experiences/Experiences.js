import React from 'react';

import ExperienceItem from './ExperienceItem';
import './Experiences.scss';

const Experiences = ({ experiences }) => {
  if (!experiences.length) {
    return <div>there is no experience.</div>;
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <th className="table__company">company</th>
          <th>title</th>
          <th>year</th>
        </tr>
        {renderedExperiences}
      </tbody>
    </table>
  );
};

export default Experiences;
