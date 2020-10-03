import React from 'react';

import Table from '../../../../common/Table';
import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  const renderedEducations = educations.map(education => (
    <EducationItem key={education._id} education={education} />
  ));

  return (
    <Table columnNames={['school', 'degree', 'years']}>
      {renderedEducations}
    </Table>
  );
};

export default EducationList;
