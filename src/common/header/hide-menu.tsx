import React from "react";
import './hide-menu.css'
import {NavLink} from "react-router-dom";

type HideMenuType = {
    className:string
}

export default function HideMenu ({className}:HideMenuType){
    return(
        <div className={'toggle-menu ' + className}>
            <NavLink to='/'>main</NavLink>
            <NavLink to='/auth'>auth</NavLink>
        </div>
    )
}
