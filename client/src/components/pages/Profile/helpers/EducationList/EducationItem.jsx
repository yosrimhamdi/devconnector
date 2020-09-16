import React from 'react';

import './EducationItem.scss';
import getFormattedDate from '../../../../../utils/getFomatedDate';

const EducationItem = ({ education }) => {
  const { school, from, to, degree, fieldOfStudy } = education;

  return (
    <li className="education-item">
      <h2 className="education-item__title">{school}</h2>
      <div className="education-item__details">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="education-item__detail-info">degree:</span>
          <span>{degree}</span>
        </div>
        <div>
          <span className="education-item__detail-info">field of study:</span>
          <span>{fieldOfStudy}</span>
        </div>
      </div>
    </li>
  );
};

export default EducationItem;
