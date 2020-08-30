import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../../history';

import './global.scss';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import Landing from '../pages/Landing';
import Profiles from '../pages/Profiles';
import ShowProfile from '../pages/ShowProfile';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/profiles" exact component={Profiles} />
        <Route path="/profiles/:handle" exact component={ShowProfile} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
