import React from 'react';
import PropTypes from 'prop-types';

import { Route,Switch } from 'react-router-dom';

import NotFound from '../../pages/notfound'
import Contact from '../../pages/contact';
import Home from '../../pages/home'
import Header from '../header';
import Footer from '../footer';


class Master extends React.PureComponent {
    render() {
        return (
            <div>
               <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='*' component={NotFound} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

Master.propTypes = {

};

export default Master;
