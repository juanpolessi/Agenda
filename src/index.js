import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers/reducers'
import './index.css';

let store = createStore(Reducers)

let fnRender = () => {
    ReactDOM.render(
        <Provider store = { store } >
            <App />
        </Provider>,
        document.getElementById('root'));
};

fnRender();

