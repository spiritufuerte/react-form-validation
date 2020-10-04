import React from "react";
import {reduxForm, Field} from "redux-form";
import {aol, email, maxLengthCreator, minLength, required} from "../utils/validators/validators";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {reset} from 'redux-form';
import {getFormValues} from '../redux/selectors';
import axios from 'axios';

const maxLength20 = maxLengthCreator(20);
const minLength8 = minLength(8);
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name="email" component={Input}
                       warn={aol}
                       validate={[required, email]}/>
            </div>
            <div>
                <Field placeholder="password" name="password" component={Input}
                       validate={[required, minLength8, maxLength20]}/>
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({form: 'form'})(Form);

const Login = (props) => {

    const dispatch = useDispatch();
    const values = useSelector(getFormValues);
    const handleSubmit = values => {
        console.log(values);
    }


    const handleSignUn = () => {
        axios.post('http://142.93.134.108:1111/sign_up', values)
            .then(function (response) {
                console.log(response);
                dispatch(reset('form'));
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const handleLogin = () => {
        axios.post(`http://142.93.134.108:1111/login?email=${values.email}&password=${values.password}`).then(function (response) {
            console.log(response);

        });
    }
    return (
        <div>
            <ReduxForm handleSubmit={handleSubmit}/>
            <div>
                <button onClick={handleSignUn}>sign up</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;