import React from 'react';
import { Link } from 'react-router-dom';

import './CreateProfileModal.scss';
import tools from '../../icons/tools.svg';
import Nav from '../../../../layouts/Nav';

const CreateProfileModal = () => (
  <>
    <Nav />
    <div className="create-profile-modal">
      <div className="create-profile-modal__wrapper">
        <h1 className="create-profile-modal__heading">create profile</h1>
        <div className="create-profile-modal__content">
          <img src={tools} alt="tools" className="create-profile-modal__icon" />
          <div className="create-profile-modal__messages-wrapper">
            <p className="create-profile-modal__message">
              it looks like you have no profile yet
            </p>
            <p className="create-profile-modal__message">
              feel free creating one!
            </p>
          </div>
        </div>
        <div className="create-profile-modal__link-wrapper">
          <Link to="/profiles/new" className="create-profile-modal__link">
            create profile
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default CreateProfileModal;
