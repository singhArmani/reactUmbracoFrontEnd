import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    componentDidMount() {
        // calling umbraco api here
    }
    
    render() {
        return (
            <div id="footer-container">
                <footer class="wrapper">
                    <h3>CopyRights Umbraco-React</h3>
                </footer>
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;