import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Profile.scss';

import { fetchProfile } from '../../../redux/actions';
import Spinner from '../../common/Spinner';
import ProfileDisplay from './helpers/ProfileDisplay/ProfileDisplay';

const Profile = ({ profile, fetchProfile, match, errors }) => {
  useEffect(() => {
    if (!profile) {
      fetchProfile(match.params.handle);
    }
  }, []);

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
  const profile = Object.values(profiles.data).find(
    profile => profile.handle === ownProps.match.params.handle,
  );

  return { profile, errors };
};

export default connect(mapStateToProps, { fetchProfile })(Profile);
