import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reset} from 'redux-form';
import {getFormValues} from '../redux/selectors';
import {ReduxForm} from "./Form";
import {userAPI} from "../api/api";
import classes from './Login.module.css';

const Login = (props) => {

    const dispatch = useDispatch();
    const values = useSelector(getFormValues);
    const handleSubmit = values => {
        console.log(values);
    }

    const handleSignUn = () => {
        userAPI.signup(values);
        dispatch(reset('form'));
    }

    const handleLogin = () => {
        userAPI.login(values);
        userAPI.getAccessToken();
    }
    return (
        <div className={classes.wrapper}>
            <ReduxForm handleSubmit={handleSubmit}/>
            <div>
                <button onClick={handleSignUn}>sign up</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;