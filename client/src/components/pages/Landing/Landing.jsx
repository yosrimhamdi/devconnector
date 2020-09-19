import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = () => (
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
        <Link to="/signup" className="link">
          sign up
        </Link>
        <Link to="/login" className="link link--grey">
          login
        </Link>
      </div>
    </div>
  </div>
);
export default Landing;
