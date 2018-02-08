import * as React from 'react';
import { Link } from 'react-router-dom';


// Notice that the Link to="/" is for Login which is the FIRST apparent screen to show
class BottomNavigation extends React.Component {
    render() {
        return (
            <ul className="Bottom-Nav" id="options_list">
                <li id="aboutus_link"><Link to="/aboutus" className="No-underline">About Us</Link></li>
                <li id="login_link"><Link to="/" className="No-underline">Login</Link></li>
                <li id="contactus_link"><Link to="/contactus" className="No-underline">Contact Us</Link></li>
            </ul>
        );
    }
}

export default BottomNavigation;