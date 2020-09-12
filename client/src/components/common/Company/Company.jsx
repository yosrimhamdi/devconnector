import React from 'react';

import './Company.scss';

const Company = ({ company }) => {
  if (!company) {
    return null;
  }

  return (
    <span className="company">
      <span className="company__at">at</span>
      <span className="company__name">{company}</span>
    </span>
  );
};

export default Company;
