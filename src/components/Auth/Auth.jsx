import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuthError, getFormValues} from '../../redux/selectors';
import {ReduxForm} from "./Form/Form";
import {auth} from "../../api/api";
import classes from './Auth.module.css';

const Auth = () => {
    const dispatch = useDispatch();
    const values = useSelector(getFormValues);
    const errorMessage = useSelector(getAuthError);

    const handleSubmit = values => {
        console.log(values);
    }

    const handleSignUn = () => {
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
            {errorMessage? <span>{errorMessage}</span> : null}
            <ReduxForm handleSubmit={handleSubmit}/>
            <div className={classes.button_block}>
                <div className={classes.button}>
                    <button onClick={handleSignUn}>sign up</button>
                </div>
                <div className={classes.button}>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Auth;