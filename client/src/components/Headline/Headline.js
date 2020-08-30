import React from 'react';

import './Headline.scss';

const Headline = ({ header, subHeader }) => {
  return (
    <div className="headline">
      <h1 className="headline__title">{header}</h1>
      <h3 className="headline__message">{subHeader}</h3>
    </div>
  );
};

export default Headline;
