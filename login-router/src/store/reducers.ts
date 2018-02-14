import { combineReducers } from 'redux';
import { authenticationReducer } from '../modules/authentication';

const makeRootReducer = combineReducers({
    authentication: authenticationReducer
});

export default makeRootReducer;