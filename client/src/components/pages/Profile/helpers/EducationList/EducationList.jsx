import React from 'react';

import EducationItem from './EducationItem';

const EducationList = ({ educations }) => {
  const renderedEducations = educations.map(education => (
    <EducationItem education={education} key={education._id} />
  ));

  return (
    <table className="table">
      <tbody>
        <tr className="table__headers">
          <th>school</th>
          <th>degree</th>
          <th>field of study</th>
          <th>date</th>
        </tr>
      </tbody>
      {renderedEducations}
    </table>
  );
};

export default EducationList;
