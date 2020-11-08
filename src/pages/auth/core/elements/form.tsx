import {Field} from "redux-form";
import React from "react";
import {Email} from './elementsForm/email'
import Password from './elementsForm/password'
import './form.css'
import {InjectedFormProps} from "redux-form/lib/reduxForm";

const required = (value:number|string) => value ? undefined : 'Required';
const email = (value:string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const minValue = (min:number) => (value:number) =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue8 = minValue(8);

export default function ({handleSubmit}:InjectedFormProps){

    // validate={[ required, email ]}
    //validate={[ required, minValue8 ]}
    return(
        <>
            <form onSubmit={handleSubmit}  className='sign-in-sign-up'>
                <p>email</p>
                <Field placeholder={'e-mail'} name={'login'} component={Email} validate={[ required, email ]}/>
                <p>password</p>
                <Field placeholder={'password'} name={'password'} component={Password} validate={[ required, minValue8 ]}/>
                <button>submit</button>
            </form>
        </>
    )
}