import React from 'react';
import './App.css';
import Login from "./components/Login";
import {Provider} from 'react-redux';
import store from "./redux/redux-store";
import classes from '../src/App.css';

function App() {
    return (
        <Provider store={store}>
            <div className={classes.App}>
                <Login/>
            </div>
        </Provider>
    );
}

export default App;
