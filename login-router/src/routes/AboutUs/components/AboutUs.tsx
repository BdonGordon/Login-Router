import * as React from 'react';
import BottomNavigation from '../../../layouts/BottomNavigation';

const logo = require('../../../logo.svg');

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h4> About Us </h4>
                <BottomNavigation />
            </div>
        );
    }
}

export default AboutUs;