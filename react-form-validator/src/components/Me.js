import React from "react";


const Me = (props) => {


    const handleClick = (props) => {
        props.refreshToken;
    }


    return (
        <div>
            <div>sfaasd</div>
            <button onClick={handleClick}>Refresh</button>
        </div>
    );
};

export default Me;