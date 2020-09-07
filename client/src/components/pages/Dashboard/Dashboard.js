import React from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';

import { fetchUserProfile } from '../../../redux/actions';
import history from '../../../history';
import DashboardContent from './DashboardContent';
import UserProfileLink from './UserProfileLink';

class Dashboard extends React.Component {
  UNSAFE_componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      history.push('/login');
    }
  }

  componentDidMount() {
    this.props.fetchUserProfile();
  }

  render() {
    const { profile, auth, loading } = this.props;

    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <h1 className="dashboard__title">dashboard</h1>
          <UserProfileLink user={auth.user} profile={profile} />
          <DashboardContent profile={profile} loading={loading} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profiles, loading }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
  loading,
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
