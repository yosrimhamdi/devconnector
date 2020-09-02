import React from 'react';
import { connect } from 'react-redux';

import './Dashboard.scss';

import CostumLink from '../../CostumLink';
import { fetchUserProfile } from '../../../redux/actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile();
  }

  renderCreateProfile() {
    if (this.props.auth.user.hasProfile) {
      return null;
    }

    return (
      <>
        <div className="dashboard__create-profile-message">
          yo have no profile yet. Please create one.
        </div>
        <CostumLink
          to="/profiles/new"
          bgColor="#17a2b8"
          color="white"
          text="create profile"
        />
      </>
    );
  }

  render() {
    const { user } = this.props.auth;

    const firstName = user.name.split(' ')[0];
    //

    return (
      <div className="dashboard">
        <div className="dashboard__content">
          <h1 className="dashboard__title">dashboard</h1>
          <h3 className="dashboard__welcome-message">
            Welcome <span className="dashboard__user-name">{firstName}</span>
          </h3>
          <div>{this.renderCreateProfile()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchUserProfile })(Dashboard);
