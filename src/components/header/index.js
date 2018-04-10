import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar'

class Header extends Component {
    render() {
        return (
        <div id="header-container">
            <header class="wrapper clearfix">
                <h1 id="title">React Title  here</h1>
            <Navbar />
            </header>
        </div>);
    }
}

Header.propTypes = {

};

export default Header;