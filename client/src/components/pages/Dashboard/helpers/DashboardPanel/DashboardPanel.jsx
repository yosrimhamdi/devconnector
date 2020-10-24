import React from 'react';
import { connect } from 'react-redux';

import './DashboardPanel.scss';
import Experiences from '../../../../common/Experiences';
import Educations from '../../../../common/Educations';
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
      <Experiences experiences={experience} />
      <Educations educations={education} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, null)(DashBoardPanel);
