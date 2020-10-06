import React from 'react';

import getFormattedDate from '../../../../../utils/getFormattedDate';

const ExperienceItem = ({ experience }) => {
  const { company, from, to, title, location, description } = experience;

  return (
    <tr>
      <td>{company}</td>
      <td>{title}</td>
      <td>{location}</td>
      <td>{description || 'none'}</td>
      <td>{getFormattedDate(from, to)}</td>
    </tr>
  );
};

export default ExperienceItem;
