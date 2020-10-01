import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './BackSection.scss';
import backArrow from './back-arrow.svg';

const BackSection = ({ title }) => {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onDocumentScroll = () => {
      if (window.scrollY > 0) {
        setElevated(true);
      } else if (window.scrollY === 0) {
        setElevated(false);
      }
    };

    document.addEventListener('scroll', onDocumentScroll);

    return () => document.removeEventListener('scroll', onDocumentScroll);
  }, []);

  const className = classnames('back-section', {
    'back-section--elevated': elevated,
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
        <div className="back-section__title">{title}</div>
      </div>
    </div>
  );
};

export default BackSection;
