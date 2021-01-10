import React from 'react';
import { connect } from 'react-redux';

import './DashboardPanel.scss';
import ExperienceManager from '../ExperienceManager';
import EducationManager from '../EducationManager';
import NavLinks from '../NavLinks';
import UserPhoto from '../UserPhoto';
import Nav from '../../../../layouts/Nav';

const DashBoardPanel = ({ profile, user }) => {
  const { experience, education } = profile;

  return (
    <>
      <Nav />
      <div className="dashboard-panel">
        <UserPhoto user={user} />
        <h1 className="dashboard-panel__greetings">
          <span>welcome, </span>
          <span>{user.fullname}</span>
        </h1>
        <NavLinks />
        <ExperienceManager experiences={experience} />
        <EducationManager educations={education} />
      </div>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, null)(DashBoardPanel);
