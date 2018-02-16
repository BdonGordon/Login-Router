import * as React from 'react';
import { store } from '../../../container/AppContainer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        const checker = store.getState();
    }

    render() {
        return (
            <div>
                <h1> Home Screen</h1>
            </div>
        );
    }
}

export default Home;