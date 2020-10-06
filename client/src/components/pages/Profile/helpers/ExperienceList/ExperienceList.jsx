import React from 'react';

import './ExperienceList.scss';
import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ experiences }) => {
  const renderedExps = experiences.map(experience => (
    <ExperienceItem experience={experience} key={experience._id} />
  ));

  return (
    <table className="table experience-list">
      <tbody>
        <tr className="table__headers">
          <th>company</th>
          <th>position</th>
          <th>location</th>
          <th>description</th>
          <th>date</th>
        </tr>
        {renderedExps}
      </tbody>
    </table>
  );
};

export default ExperienceList;
