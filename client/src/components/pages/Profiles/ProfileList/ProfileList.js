import React from 'react';
import { connect } from 'react-redux';

import { fetchProfiles } from '../../../../redux/actions';
import ProfileItem from '../ProfileItem';
import './ProfileList.scss';
import Spinner from '../../../Spinner';

class ProfileList extends React.Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }

  renderProfiles() {
    return this.props.profiles.map(profile => (
      <ProfileItem key={profile._id} profile={profile} />
    ));
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return <div className="profile-list">{this.renderProfiles()}</div>;
  }
}

const mapStateToProps = ({ profiles, loading }) => ({
  profiles: Object.values(profiles),
  loading,
});

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);
