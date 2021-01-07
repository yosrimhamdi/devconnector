import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';
import useChangeNavBgColor from './useChangeNavBgColor';

const Landing = () => {
  useChangeNavBgColor();

  return (
    <div className="landing">
      <h4 className="landing__outlook">connector</h4>
      <div className="landing__wrapper">
        <h1 className="landing__headline">Connect. Ask.</h1>
        <h1 className="landing__headline">Get valid responses.</h1>
        <div className="landing__button-wrapper">
          <h3 className="landing__small-headline">Join our community</h3>
          <Link to="/signup" className="landing__button">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landing;
