import React, {useEffect} from "react";
import './core.css'
import FormContainer from './elements/formContainer'
import ErrorMessage from  './elements/errorMassage'
import {observerUser} from '../../../DAL/DAL'
import {useState} from  'react'
import {useDispatch} from 'react-redux'
import {loginUserThunkCreator, registerUserThunkCreator} from "../../../redux/actions/actions";


export default function () {
    const [sign,setSign] = useState('sign up')
    const [error,setError] = useState(false)
    let dispatch = useDispatch();
    useEffect(()=>{
        observerUser(dispatch)
    })


    const sendData = (values:any) =>{
        if(sign === 'sign up'){
            let thunk = registerUserThunkCreator(values,setError)
            dispatch(thunk)
        }else{
            let thunk = loginUserThunkCreator(values,setError)
            dispatch(thunk)
        }
    }
    let buttonText = "sign up";
    if(sign === 'sign up'){
        buttonText = 'go to sign in'
    }else{
        buttonText = 'go to sign up'
    }
    const changeSign = () =>{
        if(sign === 'sign up'){
            setSign('sign in')
        }else{
            setSign('sign up')
        }
    }

    return(
        <>
            <h1 >{sign}</h1>
            {error?<ErrorMessage error={error} setError={setError}/>:<FormContainer onSubmit={sendData}/>}
            <p onClick={changeSign} className='change-sign'>{buttonText}</p>
        </>
    )

}