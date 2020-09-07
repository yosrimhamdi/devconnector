import React from 'react';

import './Educations.scss';

import Table from '../../../common/Table';
import EducationItem from './EducationItem';

const Educations = ({ educations }) => {
  if (!educations.length) {
    return <div>there is no education to display.</div>;
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <div className="education">
      <h1 className="education__title">education credentials</h1>
      <Table columnNames={['school', 'degree', 'years']}>
        {renderedEducations}
      </Table>
    </div>
  );
};

export default Educations;
