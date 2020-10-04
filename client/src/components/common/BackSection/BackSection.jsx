import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import history from '../../../history';

import './BackSection.scss';
import backArrow from './back-arrow.svg';

const BackSection = ({ title, aligned }) => {
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
    'back-section--aligned-with-content': aligned,
  });

  return (
    <div className={className}>
      <div className="back-section__wrapper">
        <div
          role="button"
          onClick={history.goBack}
          className="back-section__link"
        >
          <img
            src={backArrow}
            alt="arrow"
            className="back-section__back-arrow"
          />
        </div>
        <div className="back-section__title">{title}</div>
      </div>
    </div>
  );
};

BackSection.defaultProps = {
  location: '/dashboard',
};

export default BackSection;
