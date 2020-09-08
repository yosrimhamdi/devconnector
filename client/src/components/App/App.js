import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../../history';

import './global.scss';
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
import { PrivateRoute } from '../common/Routes';

const NonLanding = () => (
  <div style={{ margin: '6em 0' }}>
    <Switch>
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/profiles" exact component={Profiles} />
      <Route path="/profiles/update" exact component={UpdateProfile} />
      <Route path="/profiles/new" exact component={CreateProfile} />
      <Route path="/profiles/experience/new" exact component={AddExperience} />
      <Route path="/profiles/education/new" exact component={AddEducation} />
      <Route path="*" exact component={() => <div>not found</div>} />
    </Switch>
  </div>
);

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route component={NonLanding} />
    </Switch>
  </Router>
);

export default App;
