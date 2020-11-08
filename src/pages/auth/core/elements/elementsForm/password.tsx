import React from "react";
import {WrappedFieldProps} from "redux-form";

const password = ({input,meta,...props}: WrappedFieldProps) => {
    return(
        <div className='input-sign'>
            <input  type="password" {...input} {...props}/>
            {meta.touched && meta.error && <span className='error'>the min length of password is 8 symbols</span>}
        </div>
    )
}
export default password;