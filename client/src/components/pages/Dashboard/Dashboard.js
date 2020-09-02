import React from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';

import CostumLink from '../../CostumLink';
import { fetchUserProfile } from '../../../redux/actions';
import history from '../../../history';

class Dashboard extends React.Component {
  UNSAFE_componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      history.push('/login');
    }
  }

  componentDidMount() {
    this.props.fetchUserProfile();
  }

  renderContent() {
    if (this.props.auth.user.hasProfile) {
      return (
        <div>
          <div className="dashboard__create-profile-message">
            yo have no profile yet. Please create one.
          </div>
          <CostumLink
            to="/profiles/new"
            bgColor="#17a2b8"
            color="white"
            text="create profile"
          />
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__content">
          <h1 className="dashboard__title">dashboard</h1>
          <h3 className="dashboard__welcome-message">
            Welcome{' '}
            <span className="dashboard__user-name">
              {this.props.auth.user.name.split(' ')[0]}
            </span>
          </h3>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profiles, errors }) => ({
  auth,
  errors,
  profile: profiles.find(profile => profile.user._id === auth.user._id),
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
