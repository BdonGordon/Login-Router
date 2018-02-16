import * as React from 'react';
import { LoginProps } from '../containers/LoginContainer';
import { withRouter } from 'react-router-dom';
//import { login } from '../../../modules/authentication';
import BottomNavigation from '../../../layouts/BottomNavigation';
const logo = require('../../../logo.svg');

//initialize the initial state of the LoginProps.IState "object" properties

const initialState: LoginProps.IState = {
    username: '',
    password: ''
};

class Login extends React.Component<LoginProps.IProps, LoginProps.IState> {
    constructor(props: LoginProps.IProps) {
        super(props);

        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ username: e.currentTarget.value }); //made a mistake here... forgot the curly braces to encompass username
    }

    handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        this.props.login('fds', 'fds');
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label className="label-margin"> Please enter username and password </label>
                    <br /><br />
                    <input type="text" placeholder="Username" className="input-fields" onChange={this.handleUsernameChange} />
                    <br />
                    <input type="password" placeholder="Password" className="input-fields" onChange={this.handlePasswordChange} />
                    <br/>
                    <input type="submit" className="login-button" value="Login" />
                </form>
                <div>
                    {this.props.user}
                </div>
                <BottomNavigation />
            </div>
        );
    }
}

//unsure with withRouter does, but it works for now
export default withRouter(Login);