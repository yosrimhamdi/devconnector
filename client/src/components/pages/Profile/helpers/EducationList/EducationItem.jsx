import React from 'react';

import getFormattedDate from '../../../../../utils/getFomatedDate';

const EducationItem = ({ education }) => {
  const { school, from, to, degree, fieldOfStudy } = education;

  return (
    <li className="credentials__item">
      <h2 className="credentials__title">{school}</h2>
      <div className="credentials__details">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="credentials__detail-info">degree:</span>
          <span>{degree}</span>
        </div>
        <div>
          <span className="credentials__detail-info">field of study:</span>
          <span>{fieldOfStudy}</span>
        </div>
      </div>
    </li>
  );
};

export default EducationItem;
