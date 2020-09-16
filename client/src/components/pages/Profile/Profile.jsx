import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Profile.scss';

import { fetchProfile } from '../../../redux/actions';
import Spinner from '../../common/Spinner';
import ProfileDisplay from './helpers/ProfileDisplay/ProfileDisplay';

const Profile = ({ profile, fetchProfile, match, history, errors }) => {
  useEffect(() => {
    fetchProfile(match.params.handle);
  }, [fetchProfile, match.params.handle]);

  if (errors.profileNotFound) {
    return <div>profile not found</div>;
  }

  if (!profile) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <button
        type="button"
        className="link link--grey"
        onClick={history.goBack}
      >
        go back
      </button>
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
