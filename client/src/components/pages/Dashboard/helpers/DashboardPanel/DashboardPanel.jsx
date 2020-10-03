import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './DashboardPanel.scss';
import ExperienceList from '../ExperienceList';
import EducationList from '../EducationList';
import { updatePhoto } from '../../../../../redux/actions';
import profileIcon from '../../icons/profile.svg';
import experienceIcon from '../../icons/experience.svg';
import educationIcon from '../../icons/education.svg';
import cameraIcon from '../../icons/camera.svg';

const DashBoardPanel = ({ profile, updatePhoto, user }) => {
  const { experience, education } = profile;

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
                src={cameraIcon}
                alt="education"
                className="dashboard-panel__camera-icon"
              />
            </span>
          </label>
        </div>
      </div>
      <h1 className="dashboard-panel__greetings">{`welcome, ${user.fullname}`}</h1>
      <div className="dashboard-panel__nav">
        <div className="dashboard-panel__link-wrapper">
          <img
            src={profileIcon}
            alt="profile"
            className="dashboard-panel__icon"
          />
          <Link to="/profiles/update" className="dashboard-panel__link">
            update profile
          </Link>
        </div>
        <div className="dashboard-panel__link-wrapper">
          <img
            src={experienceIcon}
            alt="experience"
            className="dashboard-panel__icon"
          />
          <Link to="/profiles/experience/new" className="dashboard-panel__link">
            add experience
          </Link>
        </div>
        <div className="dashboard-panel__link-wrapper">
          <img
            src={educationIcon}
            alt="education"
            className="dashboard-panel__icon"
          />
          <Link to="/profiles/education/new" className="dashboard-panel__link">
            add education
          </Link>
        </div>
      </div>
      <div className="dashboard-panel__cridentials">
        <ExperienceList experiences={experience} />
        <EducationList educations={education} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, { updatePhoto })(DashBoardPanel);
