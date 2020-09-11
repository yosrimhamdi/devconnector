import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { logoutUser } from '../../../redux/actions';

import Navigation from './Navgitation';

const Header = ({ auth, logoutUser }) => (
  <div className="header">
    <div className="header__left-section">
      <Link to="/" className="header__devconnector">
        devConnector
      </Link>
      <Link to="/profiles" className="header__developer">
        developers
      </Link>
    </div>
    <div className="header__right-section">
      <Navigation auth={auth} logoutUser={logoutUser} />
    </div>
  </div>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Header);
