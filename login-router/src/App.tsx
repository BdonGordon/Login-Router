import * as React from 'react';
import './App.css';
import BottomNavigation from './layouts/BottomNavigation';
import RouterIndex from './routes/index';
import Login from './routes/Login/components/Login';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <RouterIndex />
        <BottomNavigation />
      </div>
    );
  }
}

export default App;
