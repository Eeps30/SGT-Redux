import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './components/reducers';
import promise from './components/middleware/promise';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from './components/middleware/logger';

const store = createStore(rootReducer, {}, applyMiddleware(logger, promise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root')
);