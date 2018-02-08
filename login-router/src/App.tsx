import * as React from 'react';
import './App.css';
import BottomNavigation from './layouts/BottomNavigation';
import RouterIndex from './routes/index';
import Login from './routes/Login/components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RouterIndex />
        <BottomNavigation />
      </div>
    );
  }
}

export default App;
