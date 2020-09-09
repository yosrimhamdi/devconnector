import React from 'react';

import Table from '../../../../common/Table';
import EducationItem from './EducationItem';

const Educations = ({ educations }) => {
  if (!educations.length) {
    return (
      <div className="dashboard__empty-section">
        <h1 className="dashboard__section-title">education cridentials</h1>
        <div className="dashboard__empty-message">there is no education.</div>
      </div>
    );
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <div className="dashboard__section">
      <h1 className="dashboard__section-title">education credentials</h1>
      <Table columnNames={['school', 'degree', 'years']}>
        {renderedEducations}
      </Table>
    </div>
  );
};

export default Educations;
