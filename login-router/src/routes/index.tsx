import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login/containers/LoginContainer'; //get the class from the container since it exports Login with the connect
import AboutUs from './AboutUs/components/AboutUs';
import ContactUs from './ContactUs/components/ContactUs';
import Home from './Home/components/Home';

/**
* This is /routes/index
**/
class RouterIndex extends React.Component {
    render() {
        return (
            <div className="div-center">
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/home" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default RouterIndex;