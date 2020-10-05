import React from "react";
import classes from './Input.module.css';

export const Input = ({input, name, meta: {touched, error, warning}}) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <input {...input} placeholder={name}/>
            </div>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}