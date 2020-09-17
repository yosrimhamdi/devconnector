import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import history from '../../history';

import {
  PrivateRoute,
  RestrictedRoute,
  RestrictedRequireProfileRoute,
} from '../common/Routes';
import Header from '../layouts/Header';
import Landing from '../pages/Landing';
import Profiles from '../pages/Profiles';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateProfile from '../pages/CreateProfile';
import UpdateProfile from '../pages/UpdateProfile';
import AddExperience from '../pages/AddExperience';
import AddEducation from '../pages/AddEducation';
import Profile from '../pages/Profile';
import Posts from '../pages/Posts';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Landing} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <RestrictedRoute path="/register" exact component={Register} />
      <RestrictedRoute path="/login" exact component={Login} />
      <Route path="/profiles" exact component={Profiles} />
      <Route path="/profiles/new" exact component={CreateProfile} />
      <RestrictedRequireProfileRoute
        path="/profiles/update"
        exact
        component={UpdateProfile}
      />
      <RestrictedRequireProfileRoute
        path="/profiles/experience/new"
        exact
        component={AddExperience}
      />
      <RestrictedRequireProfileRoute
        path="/profiles/education/new"
        exact
        component={AddEducation}
      />
      <Route path="/profiles/:handle" exact component={Profile} />
      <PrivateRoute path="/posts" exact component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
