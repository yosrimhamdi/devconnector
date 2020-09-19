import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Profile.scss';

import { fetchProfile } from '../../../redux/actions';
import Spinner from '../../common/Spinner';
import ProfileDisplay from './helpers/ProfileDisplay/ProfileDisplay';

const Profile = ({ profile, fetchProfile, match, errors }) => {
  useEffect(() => {
    fetchProfile(match.params.handle);
  }, [fetchProfile, match.params.handle]);

  if (errors.profileNotFound) {
    return <div>profile not found</div>;
  }

  if (!profile) {
    return <Spinner fullScreen />;
  }

  return (
    <div className="profile">
      <ProfileDisplay profile={profile} />
    </div>
  );
};

const mapStateToProps = ({ profiles, errors }, ownProps) => {
  const { handle } = ownProps.match.params;

  const targetProfile = Object.values(profiles).find(
    profile => profile.handle === handle,
  );

  return { profile: targetProfile, errors };
};

export default connect(mapStateToProps, { fetchProfile })(Profile);
