import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router , Redirect} from 'react-router-dom'
import AppWithQueryState from './App';
import Detail from './Detail';
import Compare from './Compare';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { Provider } from 'react-redux';

const routing = (
    <Router>
        <div>
            <Provider store = {store}>
                <Route path="/car/:id" component={Detail} />
                <Route path="/compare" component={Compare} />
                <Route path="/cars" component={AppWithQueryState} />
                <Route exact path="/"> <Redirect to="/cars" /></Route>
                </Provider>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
