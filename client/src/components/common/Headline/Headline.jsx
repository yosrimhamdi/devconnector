import React from 'react';

import './Headline.scss';

const Headline = ({ header, subHeader }) => (
  <div className="headline">
    <h1 className="headline__title">{header}</h1>
    <h3 className="headline__sub-title">{subHeader}</h3>
  </div>
);

export default Headline;
