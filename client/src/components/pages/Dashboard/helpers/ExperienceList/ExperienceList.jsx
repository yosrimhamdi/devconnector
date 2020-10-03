import React from 'react';

import './ExperienceList.scss';
import ExperienceItem from './ExperienceItem';
import Table from '../../../../common/Table';

const ExperienceList = ({ experiences }) => {
  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <div className="experience-list">
      <h1 className="experience-list__title">experience cridentials</h1>
      <Table columnNames={['company', 'title', 'years']}>
        {renderedExperiences}
      </Table>
    </div>
  );
};

export default ExperienceList;
