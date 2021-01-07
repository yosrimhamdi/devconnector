import React from 'react';

import './Landing.scss';
import Link from '../../common/Link';
import useChangeNavBgColor from './useChangeNavBgColor';

const Landing = () => {
  useChangeNavBgColor();

  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__header">
          <span>Developer Connector</span>
        </h1>
        <h2 className="landing__sub-header">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </h2>
        <div className="landing__button-container">
          <Link to="signup" text="sign up" />
          <Link grey to="login" text="login" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
