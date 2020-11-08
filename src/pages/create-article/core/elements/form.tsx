import React from "react";
import { Field } from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import './form.css'

export default function ({handleSubmit}:InjectedFormProps) {
    return(
            <form onSubmit={handleSubmit} className={'create-article'}>
                <p>create article</p>
                <Field placeholder={'write your article'} name={'textarea'} component={"textarea"} />
                <button >submit</button>
            </form>
    )
}