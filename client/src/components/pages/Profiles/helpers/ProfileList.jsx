import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './ProfileList.scss';
import { fetchProfiles } from '../../../../redux/actions';
import ProfileItem from './ProfileItem';
import Spinner from '../../../common/Spinner';

const ProfileList = ({ fetchProfiles, profiles, loading }) => {
  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  if (loading) {
    return <Spinner white fullScreen />;
  }

  const renderedProfiles = profiles.map(profile => (
    <ProfileItem key={profile._id} profile={profile} />
  ));

  return <ul className="profile-list collection">{renderedProfiles}</ul>;
};

const mapStateToProps = ({ profiles, loading }) => ({
  profiles: Object.values(profiles),
  loading,
});

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);
