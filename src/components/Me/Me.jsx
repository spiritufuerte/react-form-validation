import React from "react";
import classes from './Me.module.css';

const Me = (props) => {

    const handleClick = () => {
        props.refreshToken();
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.text_message}>{props.message}</div>
            <button onClick={handleClick}>Refresh</button>
        </div>
    );
};

export default Me;