import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../../history';

import './global.scss';
import Header from '../layouts/Header';

import Landing from '../pages/Landing';
import Profiles from '../pages/Profiles';
import ShowProfile from '../pages/ShowProfile';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const App = () => (
  <div>
    <Router history={history}>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/profiles" exact component={Profiles} />
      <Route path="/profiles/:handle" exact component={ShowProfile} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  </div>
);

export default App;
