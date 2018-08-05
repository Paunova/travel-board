import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header.jsx';
import TabMenu from './components/TabMenu.jsx';

import './App.css';
import './fonts.css';

class App extends Component {
    
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <Header />
            <TabMenu/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
