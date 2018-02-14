import * as React from 'react';
import RouterIndex from '../routes/index';

class CoreLayout extends React.Component {
    render() {
        return (
            <div className="App">
                <RouterIndex />
            </div>
        );
    }
}

export default CoreLayout;