import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RestrictedRoute = ({ component: Component, auth, ...rest }) => {
  const render = props => {
    if (auth.isAuthenticated) {
      return <Redirect to="dashboard" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(RestrictedRoute);
