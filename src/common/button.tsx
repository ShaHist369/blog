import React from "react";
import './button.css'

type PropsType={
    text: string
    onClick: any
}

export default function (props:PropsType){
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}