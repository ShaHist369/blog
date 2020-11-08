import React from "react";
import {NavLink} from "react-router-dom";
import './tab.css'
import {useDispatch} from 'react-redux'
import {delTabCreator} from '../../redux/actions/actions'

type PropsType={
    name:string
    id: number
}




export default function (props:PropsType){
    let link = props.name;
    if(link === 'main'){
        link = ''
    }else{
        if(link !== 'auth'){
            link = "article/" + props.id.toString()
        }
    }
    const dispatch = useDispatch()
    const closeTab = () =>{
        let delTab = delTabCreator(props.id)
        dispatch(delTab)
    }
    return(
        <>
            <div className="tab">
                <NavLink to={'/' + link}>
                <p>{props.name}</p>
                </NavLink>
                <div className='close-tab' onClick={closeTab}>
                    <div className='first-close-line'></div>
                    <div className='second-close-line'></div>
                </div>
            </div>
        </>
    )
}