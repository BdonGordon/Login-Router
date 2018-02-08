import * as React from 'react';
import { LoginProps } from '../containers/LoginContainer';

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
        //forgot that to refer to the username and password, i use "this.state.variable"
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            alert('Submission pressed ' + this.state.username + ' ' + this.state.password);
            this.props.history.push('/aboutus');
        }
        else {
            alert('Invalid username or password');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="label-margin"> Please enter username and password </label>
                    <br /><br />
                    <input type="text" placeholder="Username" className="input-fields" onChange={this.handleUsernameChange} />
                    <br />
                    <input type="password" placeholder="Password" className="input-fields" onChange={this.handlePasswordChange} />
                    <br/>
                    <input type="submit" className="login-button" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;