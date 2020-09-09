import React from 'react';
import { connect } from 'react-redux';

import './Profile.scss';
import { fetchProfile } from '../../../redux/actions';
import Spinner from '../../common/Spinner';
import ProfileDisplay from './helpers/ProfileDisplay';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.handle);
  }

  render() {
    const { profile, profileNotFound } = this.props;

    if (profileNotFound) {
      return <div>profile not found</div>;
    }

    if (!profile) {
      return <Spinner />;
    }

    console.log(profile);

    return <ProfileDisplay profile={profile} />;
  }
}

const mapStateToProps = ({ profiles, errors }, ownProps) => {
  const { handle } = ownProps.match.params;

  const targetProfile = Object.values(profiles).find(
    profile => profile.handle === handle,
  );

  return { profile: targetProfile, profileNotFound: errors.profileNotFound };
};

export default connect(mapStateToProps, { fetchProfile })(Profile);
