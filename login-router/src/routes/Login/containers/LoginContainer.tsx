import * as React from 'react';
import { login } from '../../../modules/authentication';
import Login from '../components/Login';
import { connect } from 'react-redux'; 

export namespace LoginProps {
    export interface IStateProps {
        errorMessage?: string;
        error?: boolean;
        history: { push: any };
    }

    //This is not used since reducers are not in place.
    export interface IDispatchProps {
        login: (username: string, password: string) => boolean;
    }
    export interface IOwnProps { } //unsure what this does
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { } //does nothing either

    export interface IState {
        username: string;
        password: string;
    }
    
}

//Will be implemented later
//export default connect<LoginProps.IStateProps, LoginProps.IDispatchProps, LoginProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Login);