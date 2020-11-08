import React from "react";
import "./menu.css"

type BurgerButtonProps ={
    onClick: () => void
    isChecked: boolean
}

export default function (props:BurgerButtonProps){
    return(
        <div className="header-burger">
            <input type="checkbox" id="burger-checkbox" name="burger-checkbox" checked={props.isChecked}/>

                <label className="burger-label" htmlFor="burger-checkbox" onClick={props.onClick}>
                    <div className="burger">
                        <div className="upline"></div>
                        <div className="midline"></div>
                        <div className="downline"></div>
                    </div>
                </label>
            </div>

    )
}