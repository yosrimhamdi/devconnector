import React from 'react';

import getFormattedDate from '../../../../../utils/getFomatedDate';

const EducationItem = ({ education }) => {
  const { school, from, to, degree, fieldOfStudy } = education;

  return (
    <li className="palet__card">
      <h2 className="palet__card-title">{school}</h2>
      <div className="palet__card-detail">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="palet__card-detail-info">degree:</span>
          <span>{degree}</span>
        </div>
        <div>
          <span className="palet__card-detail-info">field of study:</span>
          <span>{fieldOfStudy}</span>
        </div>
      </div>
    </li>
  );
};

export default EducationItem;
