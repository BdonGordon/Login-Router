import * as React from 'react';

export namespace LoginProps {
    export interface IStateProps {
        errorMessage?: string;
        error?: boolean;
        history: { push: any };
    }

    //I believe this is where the login(username, password) function will reside. unsure how it'll work though
    export interface IDispatchProps { }
    export interface IOwnProps { } //unsure what this does
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { } //does nothing either

    export interface IState {
        username: string;
        password: string;
    }
}