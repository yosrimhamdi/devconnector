import React from 'react';
import { connect } from 'react-redux';

import './DashboardPanel.scss';
import ExperienceList from '../ExperienceList';
import EducationList from '../EducationList';
import NavLinks from '../NavLinks';
import UserPhoto from '../UserPhoto';

const DashBoardPanel = ({ profile, user }) => {
  const { experience, education } = profile;

  return (
    <div className="dashboard-panel">
      <UserPhoto user={user} />
      <h1 className="dashboard-panel__greetings">
        <span>welcome, </span>
        <span>{user.fullname}</span>
      </h1>
      <NavLinks />
      <ExperienceList experiences={experience} />
      <EducationList educations={education} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, null)(DashBoardPanel);
