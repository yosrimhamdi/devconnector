import React from 'react';

import './ExperienceItem.scss';
import getFormattedDate from '../../../../../../utils/getFormattedDate';

const ExperienceItem = ({ experience: { company, title, from, to } }) => (
  <>
    <div className="experience-item">
      <div data-title="company">{company}</div>
      <div data-title="title">{title}</div>
      <div data-title="year">{getFormattedDate(from, to)}</div>
    </div>
  </>
);

export default ExperienceItem;
