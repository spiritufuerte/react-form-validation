import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reset} from 'redux-form';
import {getFormValues} from '../redux/selectors';
import {ReduxForm} from "./Form";
import {auth} from "../api/api";
import classes from './Auth.module.css';

const Auth = () => {
    const dispatch = useDispatch();
    const values = useSelector(getFormValues);
    const handleSubmit = values => {
        console.log(values);
    }

    const handleSignUn = () => {
        dispatch(reset('form'));
        dispatch(auth(values.email,
            values.password,
            false
        ));
    }

    const handleLogin = () => {
        dispatch(auth(values.email,
            values.password,
            true
        ));
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

export default Auth;