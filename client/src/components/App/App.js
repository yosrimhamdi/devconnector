import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../../history';

import './global.scss';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import Landing from '../pages/Landing';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Landing} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
