import React from "react";
import Logo from "./header/logo"
import Tab from "./header/tab"
import BurgerMenuButton from "./header/menu"
import HideMenu from './header/hide-menu'
import './header.css'
import {useSelector} from "react-redux";
import {useState} from 'react';

interface HeaderProps{
    tabs: Array<tabType>
}
type tabType={
    name:string,
    id:number
}

export const Header: React.FC = () =>{
    const arrayTabs:Array<tabType> = useSelector((state:any) => state.tabs)
    let tabs = arrayTabs.map(tab =><Tab key={tab.id} name={tab.name} id={tab.id}/>)
    let toggleVisible = false
    const[hideMenuClass,setHideMenuClass] = useState('hide-menu')
    const[isChecked,setIsChecked] = useState(false)

    const handleClickBurger = () =>{
        toggleVisible = !toggleVisible
        if(toggleVisible){
            setHideMenuClass('visible-menu')
            setIsChecked(true)
        }else{
            setHideMenuClass('hide-menu')
            setIsChecked(false)
        }
    }
    return(
        <>
            <header>
                <Logo/>
                <div className='tabs'>{tabs}</div>
                <BurgerMenuButton onClick={handleClickBurger} isChecked={isChecked}/>
            </header>
            <HideMenu className={hideMenuClass} />
        </>
    )
}