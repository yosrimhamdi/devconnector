import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { logoutUser } from '../../../redux/actions';

const Header = () => (
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
      <Link to="/register" className="header__sign-up">
        Sign up
      </Link>
      <Link to="/login">Login</Link>
    </div>
  </div>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Header);
