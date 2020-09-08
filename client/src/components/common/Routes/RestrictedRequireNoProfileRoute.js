import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RestrictedRequireNoProfileRoute = ({
  component: Component,
  auth,
  profile,
  ...rest
}) => {
  const render = props => {
    if (auth.isAuthenticated && !profile) {
      return <Component {...props} />;
    }

    return <Redirect to="/dashboard" />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth, profiles }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
});

export default connect(mapStateToProps)(RestrictedRequireNoProfileRoute);
