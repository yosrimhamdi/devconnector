import React from 'react';

import ExperienceItem from './ExperienceItem';
import Table from '../../../../common/Table';

const ExperienceList = ({ experiences }) => {
  if (!experiences.length) {
    return (
      <div className="dashboard__empty-section">
        <h1 className="dashboard__section-title">experience cridentials</h1>
        <div className="dashboard__empty-message">there is no experience.</div>
      </div>
    );
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <div className="dashboard__section">
      <h1 className="dashboard__section-title">experience cridentials</h1>
      <Table columnNames={['company', 'title', 'years']}>
        {renderedExperiences}
      </Table>
    </div>
  );
};

export default ExperienceList;
