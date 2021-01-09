import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';
import cube from './images/cube.svg';

const Landing = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div className="landing" ref={ref}>
      <div className="landing__nav">
        <Link to="/profiles" className="landing__profiles-link">
          <img src={cube} alt="cube logo" className="landing__cube-logo" />
          <span>Developers</span>
        </Link>
        <Link to="/login" className="landing__login-button">
          Log in
        </Link>
      </div>
      <h4 className="landing__connector">connector</h4>
      <div className="landing__wrapper">
        <h1 className="landing__headline">connect.</h1>
        <h1 className="landing__headline">interrogate.</h1>
        <h1 className="landing__headline">get responses.</h1>
        <div className="landing__cta-wrapper">
          <h3 className="landing__message">join our community</h3>
          <Link to="/signup" className="landing__signup-button">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
