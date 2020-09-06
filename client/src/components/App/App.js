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

const App = () => (
  <div>
    <Router history={history}>
      <Header />
      <Route path="/" exact component={Landing} />
      <div style={{ margin: '5em 0' }}>
        <Switch>
          <Route path="/profiles" exact component={Profiles} />
          <Route path="/profiles/new" exact component={CreateProfile} />
        </Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  </div>
);

export default App;
