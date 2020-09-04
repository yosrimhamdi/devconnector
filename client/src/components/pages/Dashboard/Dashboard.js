import React from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';

import CostumLink from '../../CostumLink';
import Experiences from './Experiences';
import Educations from './Educations';

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

  renderMainContent() {
    const { auth, profile } = this.props;

    if (!auth.user.hasProfile) {
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

    if (!profile) {
      return null;
    }

    const { experience, education } = this.props.profile;

    return (
      <div>
        <Experiences experiences={experience} />
        <Educations educations={education} />
      </div>
    );
  }

  render() {
    if (!this.props.auth.user) {
      return null;
    }

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
          {this.renderMainContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profiles }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
});

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
