import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../../history';

import './global.scss';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import Landing from '../pages/Landing';
import Profiles from '../pages/Profiles';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/profiles" exact component={Profiles} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
