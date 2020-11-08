import React from "react";
import { Field } from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

export default function ({handleSubmit}:InjectedFormProps) {
    return(
            <form onSubmit={handleSubmit}>
                <p>create article</p>
                <Field placeholder={'write your article'} name={'textarea'} component={"textarea"} />
                <button>submit</button>
            </form>
    )
}