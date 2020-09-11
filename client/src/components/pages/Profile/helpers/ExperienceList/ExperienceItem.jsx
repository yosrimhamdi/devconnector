import React from 'react';

import getFormattedDate from '../../../../../utils/getFomatedDate';

const ExperienceItem = ({ experience }) => {
  const { company, from, to, title, location, description } = experience;

  return (
    <li className="palet__card">
      <h2 className="palet__card-title">{company}</h2>
      <div className="palet__card-detail">
        <div>{getFormattedDate(from, to)}</div>
        <div>
          <span className="palet__card-detail-info">position:</span>
          <span>{title}</span>
        </div>
        <div>
          <span className="palet__card-detail-info">location:</span>
          <span>{location}</span>
        </div>
        <div>
          <span className="palet__card-detail-info">description:</span>
          <span>{description}</span>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
