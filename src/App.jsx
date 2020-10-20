import React from "react";
import './App.css';
import Auth from "./components/Auth/Auth";
import classes from '../src/App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import MeContainer from "./components/Me/MeContainer";
import {useSelector} from "react-redux";
import {getAccessToken} from "./redux/selectors";


function App(props) {
    const accessToken = useSelector(getAccessToken);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={classes.App}>
                <Switch>
                    <Route exact path="/me">
                        {!accessToken ? <Redirect to="/"/> : <MeContainer/>}
                    </Route>
                    <Route exact path="/">
                        {accessToken ? <Redirect to="/me"/> : <Auth/>}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;