import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';
import Spinner from '../../common/Spinner';
import { fetchUserProfile } from '../../../redux/actions';
import CreateProfile from './helpers/CreateProfile';
import DashboardPanel from './helpers/DashBoardPanel';

const Dashboard = ({ profile, loading, fetchUserProfile }) => {
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  let content = null;

  if (loading) {
    content = <Spinner fullScreen />;
  }

  if (!profile && !loading) {
    content = <CreateProfile />;
  } else if (profile) {
    content = <DashboardPanel profile={profile} />;
  }

  return <div className="dashboard">{content}</div>;
};

const mapStateToProps = ({ auth, profiles, loading }) => ({
  profile: auth.user ? profiles[auth.user._id] : null,
  loading,
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
