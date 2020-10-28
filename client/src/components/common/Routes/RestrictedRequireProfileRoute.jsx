import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RestrictedRequireProfileRoute = ({
  component: Component,
  auth: { isAuthenticated, profile },
  ...rest
}) => {
  const render = props => {
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    if (!profile) {
      return <Redirect to="/dashboard" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(RestrictedRequireProfileRoute);
