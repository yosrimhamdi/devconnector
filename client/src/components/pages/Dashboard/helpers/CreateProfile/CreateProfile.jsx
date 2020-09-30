import React from 'react';
import { Link } from 'react-router-dom';

import './CreateProfile.scss';
import tools from '../../icons/tools.svg';

const CreateProfile = () => (
  <div className="create-profile">
    <h1 className="create-profile__heading">create profile</h1>
    <div className="create-profile__content">
      <img src={tools} alt="tools" className="create-profile__icon" />
      <div className="create-profile__messages-wrapper">
        <p className="create-profile__message">
          it looks likes you have no profile yet
        </p>
        <p className="create-profile__message"> feel free to create one!</p>
      </div>
    </div>
    <div className="create-profile__link-wrapper">
      <Link to="/profiles/new" className="create-profile__link">
        create profile
      </Link>
    </div>
  </div>
);

export default CreateProfile;
