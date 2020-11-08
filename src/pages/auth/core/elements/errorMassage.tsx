import React, {SetStateAction, Dispatch} from "react";

type ErrorMassageProps = {
    error:string | boolean
    setError: Dispatch<SetStateAction<boolean>>
}

export default function (props:ErrorMassageProps) {
    const changeError = () =>{
        props.setError(false)
    }
    return(
        <>
            <span className='error'>{props.error}</span>
            <button onClick={changeError}>try again</button>
        </>
    )
}