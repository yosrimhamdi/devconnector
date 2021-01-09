import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__nav">
        <Link to="/developers" className="landing__profiles-link">
          Developers
        </Link>
        <Link to="/login" className="landing__login-button">
          Log in
        </Link>
      </div>
      <h4 className="landing__connector">connector</h4>
      <div className="landing__cta-wrapper">
        <h1 className="landing__headline">connect.</h1>
        <div className="landing__headline">crganize.</div>
        <h1 className="landing__headline">get responses.</h1>
        <div className="landing__button-wrapper">
          <h3 className="landing__message">join our community</h3>
          <Link to="/signup" className="landing__button">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
