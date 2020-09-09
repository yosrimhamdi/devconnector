import React from 'react';

import getFormattedDate from '../../../../utils/getFomatedDate';

const Educations = ({ educations }) => {
  console.log(educations);
  const renderedEducations = educations.map(
    ({ _id, school, from, to, degree, fieldOfStudy }) => (
      <div key={_id} className="palet__card">
        <h2 className="palet__card-title">{school}</h2>
        <div className="palet__card-detail">
          <div>{getFormattedDate(from, to)}</div>
          <div>
            <span className="palet__card-detail-info">degree:</span> {degree}
          </div>
          <div>
            <span className="palet__card-detail-info">field of study:</span>{' '}
            {fieldOfStudy}
          </div>
        </div>
      </div>
    ),
  );

  return (
    <div className="palet">
      <div className="palet__title">education</div>
      {renderedEducations}
    </div>
  );
};

export default Educations;
