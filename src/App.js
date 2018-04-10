import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {Routes}
      </MuiThemeProvider>
    );
  }
}

export default App;
