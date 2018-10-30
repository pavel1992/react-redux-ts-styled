import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Demo} from "../components/Demo";

ReactDOM.render(
    <Provider store={store}>
        <div>
            Init
            <Demo>Hello from styled components</Demo>
        </div>
    </Provider>,
    document.getElementById('root')
);