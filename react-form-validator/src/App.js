import React from 'react';
import './App.css';
import Auth from "../src/components/Auth";
import classes from '../src/App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import MeContainer from "./components/MeContainer";
import {useSelector} from "react-redux";
import {getAccessToken} from "./redux/selectors";


function App(props) {
    const accessToken = useSelector(getAccessToken);

    return (
        <BrowserRouter>
                <div className={classes.App}>
                    <Switch>
                        <Route exact path="/me" component={MeContainer}/>
                        <Route exact path="/">
                            {accessToken ? <Redirect to="/me" /> : <Auth />}
                        </Route>
                    </Switch>
                </div>
        </BrowserRouter>
    );
}

export default App;