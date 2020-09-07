import React from 'react';

import './Experiences.scss';
import ExperienceItem from './ExperienceItem';
import Table from '../../../common/Table';

const Experiences = ({ experiences }) => {
  if (!experiences.length) {
    return <div>there is no experience.</div>;
  }

  const renderedExperiences = experiences.map(experience => (
    <ExperienceItem key={experience._id} experience={experience} />
  ));

  return (
    <div className="experiences">
      <h1 className="experiences__title">experience cridentials</h1>
      <Table columnNames={['company', 'title', 'years']}>
        {renderedExperiences}
      </Table>
    </div>
  );
};

export default Experiences;
