import React from 'react';

import './Landing.scss';
import Button from '../../Button';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__header">Developer Connector</h1>
        <p className="landing__paragraph">
          Create a developer profile/portfolio, share posts and get help from other
          developers
        </p>
        <div>
          <Button
            className="landing__button"
            bgColor="#17a2b8"
            color="white"
            text="sing up"
          ></Button>
          <Button bgColor="#ffffff" color="grey" text="login"></Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
