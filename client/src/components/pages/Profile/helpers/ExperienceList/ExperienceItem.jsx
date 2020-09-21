import React from 'react';

import getFormattedDate from '../../../../../utils/getFormattedDate';

const ExperienceItem = ({ experience }) => {
  const { company, from, to, title, location, description } = experience;

  return (
    <li className="credentials__item">
      <h2 className="credentials__title">{company}</h2>
      <div className="credentials__details">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="credentials__detail-info">position:</span>
          <span>{title}</span>
        </div>
        <div>
          <span className="credentials__detail-info">location:</span>
          <span>{location}</span>
        </div>
        <div>
          <span className="credentials__detail-info">description:</span>
          <span>{description}</span>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
