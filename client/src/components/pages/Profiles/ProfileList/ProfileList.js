import React from 'react';
import { connect } from 'react-redux';

import fetchProfiles from '../../../../redux/actions/fetchProfiles';
import ProfileItem from '../ProfileItem';
import './ProfileList.scss';

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
    return <div className="profile-list">{this.renderProfiles()}</div>;
  }
}

const mapStateToProps = state => ({ profiles: Object.values(state.profiles) });

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);
