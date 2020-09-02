import React from 'react';

import ExperienceItem from './ExpItem';
import './Experiences.scss';

const Experiences = ({ experiences }) => {
  const renderedExperiences = experiences.map(exp => (
    <ExperienceItem key={exp._id} exp={exp} />
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
