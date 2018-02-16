/** Action types for logging in**/
import { IUser } from '../models/User';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'; //this will be thrown into a simple function; response will be true or false (ie. username.length > 3 returns true

/**
 * Need to create the interface and initial state of the REDUX 
 **/
export interface IAuthState {
    readonly isAuthenticated: boolean;
    readonly userName: string;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userName: ''
};

export function login(username: string, password: string){
    return {
        type: LOGIN_REQUEST,
        payload: username
    };
}

export function authenticationReducer(state: IAuthState = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            //have to have these things here.. not sure why yet
            return Object.assign({}, state, {
                isAuthenticated: true,
            });
        default:
            break;
    }

    return state;
}