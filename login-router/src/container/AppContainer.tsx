import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CoreLayout from '../layouts/CoreLayout';

//store is not made yet. to be made in a bit
class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Provider>
                    <CoreLayout />
                </Provider>
            </div>
        );
    }
}

export default AppContainer;