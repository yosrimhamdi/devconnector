import React, { useState } from 'react';
import { connect } from 'react-redux';

import './DashboardPanel.scss';
import Experiences from '../../../../common/Experiences';
import Educations from '../../../../common/Educations';
import { updatePhoto } from '../../../../../redux/actions';
import greyCamera from '../../icons/camera.svg';
import blueCamera from '../../icons/camera-blue.svg';
import NavLinks from '../NavLinks';

const DashBoardPanel = ({ profile, updatePhoto, user }) => {
  const { experience, education } = profile;

  const [camera, setCamera] = useState(greyCamera);

  const handleInputChange = e => {
    const form = new FormData();

    form.append('photo', e.target.files[0]);

    updatePhoto(form);
  };

  return (
    <div className="dashboard-panel">
      <div className="dashboard-panel__photo-wrapper">
        <div className="dashboard-panel__photo-container">
          <img
            src={`/images/${user.photo}`}
            alt={user.name}
            className="dashboard-panel__user-photo"
          />
          <label
            htmlFor="update-photo-input"
            className="dashboard-panel__update-photo-label"
            onMouseEnter={() => setCamera(blueCamera)}
            onMouseLeave={() => setCamera(greyCamera)}
          >
            <input
              type="file"
              id="update-photo-input"
              className="dashboard-panel__update-photo-input"
              onChange={handleInputChange}
              accept="image/*"
            />
            <span>
              <img
                src={camera}
                alt="education"
                className="dashboard-panel__camera-icon"
              />
            </span>
          </label>
        </div>
      </div>
      <h1 className="dashboard-panel__greetings">
        <span>welcome, </span>
        <span>{user.fullname}</span>
      </h1>
      <NavLinks />
      <Experiences experiences={experience} />
      <Educations educations={education} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, { updatePhoto })(DashBoardPanel);
