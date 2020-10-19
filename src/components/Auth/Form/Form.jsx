import {aol, email, maxLengthCreator, minLength, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Input} from "./Input/Input";
import React from "react";
import classes from './Form.module.css';

const maxLength20 = maxLengthCreator(20);
const minLength8 = minLength(8);
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.wrapper}>
                <Field placeholder="Email" name="email" component={Input}
                       warn={aol}
                       validate={[required, email]}/>
            </div>
            <div className={classes.wrapper}>
                <Field placeholder="password" name="password" component={Input}
                       validate={[required, minLength8, maxLength20]}/>
            </div>
        </form>
    )
}

export const ReduxForm = reduxForm({form: 'form'})(Form);