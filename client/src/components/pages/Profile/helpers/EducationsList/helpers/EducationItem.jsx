import React from 'react';

import './EducationItem.scss';
import getFormattedDate from '../../../../../../utils/getFormattedDate';

const EducationItem = ({ education: { school, degree, from, to } }) => (
  <>
    <div className="education-item">
      <div data-title="school">{school}</div>
      <div data-title="degree">{degree}</div>
      <div data-title="year">{getFormattedDate(from, to)}</div>
    </div>
  </>
);

export default EducationItem;
