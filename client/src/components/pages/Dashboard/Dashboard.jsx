import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';
import Spinner from '../../common/Spinner';
import { fetchUserProfile } from '../../../redux/actions';
import CreateProfileModal from './helpers/CreateProfileModal';
import DashboardPanel from './helpers/DashboardPanel';

const Dashboard = ({ profile, loading, fetchUserProfile }) => {
  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  let content = null;

  if (loading) {
    content = <Spinner fullScreen />;
  }

  if (!profile && !loading) {
    content = <CreateProfileModal />;
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
