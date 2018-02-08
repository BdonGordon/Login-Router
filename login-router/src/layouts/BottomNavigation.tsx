import * as React from 'react';
import { Link } from 'react-router-dom';


// Notice that the Link to="/" is for Login which is the FIRST apparent screen to show
class BottomNavigation extends React.Component {
    render() {
        return (
            <ul className="Bottom-Nav">
                <li><Link to="/aboutus" className="No-underline">About Us</Link></li>
                <li><Link to="/" className="No-underline">Login</Link></li>
                <li><Link to="/contactus" className="No-underline">Contact Us</Link></li>
            </ul>
        );
    }
}

export default BottomNavigation;