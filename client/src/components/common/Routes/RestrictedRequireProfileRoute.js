import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RestrictedRequireProfileRoute = ({
  component: Component,
  auth,
  profile,
  profiles,
  ...rest
}) => {
  const render = props => {
    if (auth.isAuthenticated && profile) {
      return <Component {...props} />;
    }

    return <Redirect to="/profiles/new" />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth, profiles }) => ({
  auth,
  profile: auth.user ? profiles[auth.user._id] : null,
});

export default connect(mapStateToProps)(RestrictedRequireProfileRoute);
