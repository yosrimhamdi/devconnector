import React from 'react';

import './EducationList.scss';
import Table from '../../../../common/Table';
import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  if (!educations.length) {
    return null;
  }

  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <div className="education-list">
      <Table columnNames={['school', 'degree', 'years']}>
        {renderedEducations}
      </Table>
    </div>
  );
};

export default EducationList;
