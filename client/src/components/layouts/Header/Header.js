import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { logoutUser } from '../../../redux/actions';

class Header extends React.Component {
  showAdminOrAuthContent() {
    const { isAuthenticated, user } = this.props.auth;

    if (isAuthenticated) {
      return (
        <>
          <Link to="/posts">post feed</Link>
          <Link to="/dashboard">dashboard</Link>
          <div className="header__logout">
            <img
              className="header__user-image"
              src={`/images/${user.photo}`}
              alt={`${user.name} avatar`}
            />
            <div onClick={this.props.logoutUser} role="button">
              Logout
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <Link to="/register" className="header__sign-up">
          Sign up
        </Link>
        <Link to="/login">Login</Link>
      </>
    );
  }

  render() {
    return (
      <div className="header">
        <div className="header__left-section">
          <Link to="/" className="header__devconnector">
            DevConnector
          </Link>
          <Link to="/profiles" className="header__developer">
            Developers
          </Link>
        </div>

        <div className="header__right-section">
          {this.showAdminOrAuthContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Header);
