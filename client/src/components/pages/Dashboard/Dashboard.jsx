import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';

import { fetchUserProfile } from '../../../redux/actions';
import DashboardContent from './helpers/DashboardContent';
import UserProfileLink from './helpers/UserProfileLink';

const Dashboard = ({ profile, auth, loading, fetchUserProfile }) => {
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return (
    <div className="dashboard content-wrapper">
      <div className="dashboard__container">
        <h1 className="dashboard__title">dashboard</h1>
        <UserProfileLink user={auth.user} profile={profile} />
        <DashboardContent profile={profile} loading={loading} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, profiles, loading }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
  loading,
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
