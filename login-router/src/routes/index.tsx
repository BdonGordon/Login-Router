import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login/components/Login';
import AboutUs from './AboutUs/components/AboutUs';
import ContactUs from './ContactUs/components/ContactUs';

/**
* This is /routes/index
**/

// Notice that the path="/" is for Login which is the FIRST apparent screen to show
class RouterIndex extends React.Component {
    render() {
        return (
            <div className="div-center">
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                </Switch>
            </div>
        );
    }
}

export default RouterIndex;