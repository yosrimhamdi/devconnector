import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RestrictedRequireProfileRoute = ({
  component: Component,
  auth,
  profile,
  ...rest
}) => {
  const render = props => {
    if (!auth.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    if (!profile) {
      return <Redirect to="/dashboard" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth, profiles }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
});

export default connect(mapStateToProps)(RestrictedRequireProfileRoute);
