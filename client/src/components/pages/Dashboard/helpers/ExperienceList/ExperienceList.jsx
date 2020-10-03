import React from 'react';

import ExperienceItem from './ExperienceItem';
import Table from '../../../../common/Table';

const ExperienceList = ({ experiences }) => {
  if (!experiences.length) {
    return null;
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <Table columnNames={['company', 'title', 'years']}>
      {renderedExperiences}
    </Table>
  );
};

export default ExperienceList;
