import React from "react";
import {WrappedFieldMetaProps} from "redux-form";

const button = ({submitting}:WrappedFieldMetaProps) =>{
    return(
        <>
            <button
                disabled={submitting}
                className='button form_button center white-text up-down-margin'
            >
                submit
            </button>
        </>
    )
}

export default button