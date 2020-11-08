import React from "react";
import {WrappedFieldProps} from "redux-form";

export const Email = ({input,meta,...props}: WrappedFieldProps) => {
    return(
        <div className='input-sign'>
            <input type="e-mail" {...input} {...props}/>
            {meta.touched && meta.error && <span className='error'>incorrect e-mail</span>}
        </div>
    )
}