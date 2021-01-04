import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import history from '../../history';

import {
  PrivateRoute,
  RestrictedRoute,
  RestrictedRequireProfileRoute,
} from '../common/Routes';
import Nav from '../layouts/Nav';
import Landing from '../pages/Landing';
import Developers from '../pages/Developers';
import Signup from '../pages/Signup';
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
    <Nav />
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/developers" exact component={Developers} />
      <Route path="/profiles/new" exact component={CreateProfile} />
      <Route path="/profiles/update" exact component={UpdateProfile} />
      <Route path="/profiles/experience/new" exact component={AddExperience} />
      <Route path="/profiles/education/new" exact component={AddEducation} />
      <Route path="/profiles/:handle" exact component={Profile} />
      <Route path="/posts" exact component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
export default App;
