import React from 'react';

import './ExperienceItem.scss';
import getFormattedDate from '../../../../../utils/getFomatedDate';

const ExperienceItem = ({ experience }) => {
  const { company, from, to, title, location, description } = experience;

  return (
    <li className="experience-item">
      <h2 className="experience-item__title">{company}</h2>
      <div className="experience-item__details">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="experience-item__detail-info">position:</span>
          <span>{title}</span>
        </div>
        <div>
          <span className="experience-item__detail-info">location:</span>
          <span>{location}</span>
        </div>
        <div>
          <span className="experience-item__detail-info">description:</span>
          <span>{description}</span>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
