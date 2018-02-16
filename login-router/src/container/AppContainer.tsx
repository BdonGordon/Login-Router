import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { createStore } from 'redux';
import CoreLayout from '../layouts/CoreLayout';
import makeRootReducer from '../store/reducers';

export const store = createStore(makeRootReducer);

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <CoreLayout />
                </Provider>
            </div>
        );
    }
}

export default AppContainer;