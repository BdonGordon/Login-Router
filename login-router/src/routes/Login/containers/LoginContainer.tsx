﻿import * as React from 'react';
import { login } from '../../../modules/authentication';
import Login from '../components/Login';
import { connect } from 'react-redux'; 
import { IUser } from '../../../models/User';
import { bindActionCreators } from 'redux';

export namespace LoginProps {
    export interface IStateProps {
        //errorMessage?: string;
        //error?: boolean;
        //history: { push: any };
        user: string;
    }

    //This is not used since reducers are not in place.
    export interface IDispatchProps {
        login: (username: string, password: string) => string;

    }
    export interface IOwnProps { } //unsure what this does
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { } //does nothing either

    export interface IState {
        username: string;
        password: string;
    }
}

function mapStateToProps(state: any) {
    return {
        user: state.authentication.userName
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        login: (username: string, password: string): string => dispatch(login(username, password))
    };
}


//export default Login;
export default connect<LoginProps.IStateProps, LoginProps.IDispatchProps, LoginProps.IOwnProps>(mapStateToProps, mapDispatchToProps)(Login);
//export default connect(mapStateToProps, mapDispatchToProps)(Login);