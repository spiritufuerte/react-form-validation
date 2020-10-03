import React from "react";

export const Input = ({input,name, meta:{ touched, error, warning }}) => {
   return (
    <div>
        <div>
            <input {...input} placeholder={name} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
   )
}