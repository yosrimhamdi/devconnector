import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const render = props => {
    if (auth.isAuthenticated) {
      return <Component {...props} />;
    }

    return <Redirect to="/login" />;
  };

  return <Route {...rest} render={render} />;
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
