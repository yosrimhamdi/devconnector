import React from 'react';

import './palet.scss';

import getFormattedDate from '../../../../utils/getFomatedDate';

const Experiences = ({ experiences }) => {
  const renderedExps = experiences.map(
    ({ company, from, to, title, location, description, _id }) => (
      <div key={_id} className="palet__card">
        <h2 className="palet__card-title">{company}</h2>
        <div className="palet__card-detail">
          <div>{getFormattedDate(from, to)}</div>
          <div>
            <span className="palet__card-detail-info">position:</span> {title}
          </div>
          <div>
            <span className="palet__card-detail-info">location:</span>{' '}
            {location}
          </div>
          <div>
            <span className="palet__card-detail-info">description:</span>{' '}
            {description}
          </div>
        </div>
      </div>
    ),
  );

  return (
    <div className="palet">
      <div className="palet__title">experience</div>
      {renderedExps}
    </div>
  );
};

export default Experiences;
