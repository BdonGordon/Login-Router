import * as React from 'react';
import BottomNavigation from '../../../layouts/BottomNavigation';

const logo = require('../../../logo.svg');

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h4> Contact Us </h4>
                <BottomNavigation />
            </div>
        );
    }
}

export default ContactUs;