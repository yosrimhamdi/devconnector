import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './BackSection.scss';
import backArrow from '../../icons/back-arrow.svg';

const BackSection = ({ scrolled }) => {
  const className = classnames('back-section', {
    'back-section--scrolled': scrolled,
  });

  return (
    <div className={className}>
      <div className="back-section__wrapper">
        <Link to="/dashboard" className="back-section__link">
          <img
            src={backArrow}
            alt="arrow"
            className="back-section__back-arrow"
          />
        </Link>
        <div className="back-section__title">profile</div>
      </div>
    </div>
  );
};

export default BackSection;
