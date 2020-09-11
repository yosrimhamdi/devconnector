import React from 'react';

import './Landing.scss';
import CostumLink from '../../common/CostumLink';

const Landing = () => (
  <div className="landing">
    <div className="landing__content">
      <h1 className="landing__header">Developer Connector</h1>
      <p className="landing__paragraph">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="landing__button-container">
        <CostumLink
          bgColor="#17a2b8"
          color="white"
          text="sing up"
          to="/register"
        />
        <CostumLink bgColor="#ffffff" color="grey" text="login" to="/login" />
      </div>
    </div>
  </div>
);
export default Landing;
