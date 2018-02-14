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
        e.preventDefault();
        //forgot that to refer to the username and password, i use "this.state.variable". The 
        /**
         * var checker: boolean = this.props.userlogin(this.state.username, this.state.password);
         * This function does not work called from this.props. because it does not have reducers in place in the LoginContainer
         */
        //temporarily going to call login like so: 
        /*if (login(this.state.username, this.state.password)) {
            alert('Successfully logged in');
            this.props.history.push('/home');
        }
        else {
            alert('Invalid username or password');
        }*/
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
                <BottomNavigation />
            </div>
        );
    }
}

//unsure with withRouter does, but it works for now
export default withRouter(Login);