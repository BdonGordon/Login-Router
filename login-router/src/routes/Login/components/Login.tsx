import * as React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label className="label-margin"> Please enter username and password </label>
                    <br /><br/>
                    <input type="text" placeholder="Username" className="input-fields" />
                    <br />
                    <input type="password" placeholder="Password" className="input-fields" />
                    <br/>
                    <input type="submit" className="login-button" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;