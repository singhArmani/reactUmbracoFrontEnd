//@flow

import React from 'react';

import { Route, Switch } from 'react-router-dom';

import NotFound from '../../pages/notfound';
import Contact from '../../pages/contact';
import Home from '../../pages/home';
import LoginPage from '../../pages/login';
import Footer from '../footer';

class Master extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Master.propTypes = {};

export default Master;
