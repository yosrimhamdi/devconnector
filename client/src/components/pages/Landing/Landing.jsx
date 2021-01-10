import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilesLink from '../../common/ProfilesLink';

import './Landing.scss';

const Landing = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div className="landing" ref={ref}>
      <div className="landing__nav">
        <div className="landing__nav-content">
          <ProfilesLink />
          <Link to="/login" className="landing__login-button">
            Log in
          </Link>
        </div>
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
