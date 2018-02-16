/** Action types for logging in**/

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'; //this will be thrown into a simple function; response will be true or false (ie. username.length > 3 returns true

export function login(username: string, password: string){
    return {
        type: LOGIN_REQUEST,
        payload: username
    };
}

export function authenticationReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action.payload;

        default:
            break;
    }

    return state;
}

/**
 * NO idea what this is lol
 **/
/**
declare interface ICallApiAction {
    [x: number]: {
        endpoint?: string,
        method?: string,
        types?: Array<string | object>,
        headers?: { 'Content-Type': string },
        body?: any
    };
}
**/