import {Field, InjectedFormProps} from "redux-form";
import React from "react";


export default function (props:InjectedFormProps){

    return(
        <>
            <form onSubmit={props.handleSubmit}  className='sign-in-sign-up'>
                <p>comment</p>
                <Field placeholder={'comment'} name={'comment'} component={'textarea'} />
                <button>submit</button>
            </form>
        </>
    )
}