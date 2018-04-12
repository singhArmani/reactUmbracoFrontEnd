//@flow
import React, { Component } from 'react';
import Navbar from '../navbar';

type Props = {
  pageTitle: string
};

class Header extends Component<Props> {
  render() {
    return (
      <div id="header-container">
        <header className="wrapper clearfix">
          <h1 id="title">{this.props.pageTitle}</h1>
          <Navbar />
        </header>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
