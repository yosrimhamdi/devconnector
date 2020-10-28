import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../common/Spinner';
import { fetchUserProfile } from '../../../redux/actions';
import CreateProfileModal from './helpers/CreateProfileModal';
import DashboardPanel from './helpers/DashboardPanel';

const Dashboard = ({ profile, loading, fetchUserProfile, errors }) => {
  useEffect(() => {
    if (!profile && !errors.noProfileYet) {
      fetchUserProfile();
    }
  }, [fetchUserProfile]);

  if (loading) {
    return <Spinner fullScreen />;
  }

  if (errors.noProfileYet) {
    return <CreateProfileModal />;
  }

  if (profile) {
    return <DashboardPanel profile={profile} />;
  }

  return null;
};

const mapStateToProps = ({ auth, profiles: { data }, loading, errors }) => ({
  profile: data ? data[auth.user._id] : null,
  loading,
  errors,
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
