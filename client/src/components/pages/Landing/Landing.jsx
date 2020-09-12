import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = () => (
  <div className="landing">
    <div className="landing__content">
      <h1 className="landing__header">Developer Connector</h1>
      <p className="landing__paragraph">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="landing__button-container">
        <Link to="/register" className="link">
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
