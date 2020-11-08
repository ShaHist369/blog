import React from "react";
import Logout from './logout'
import Login from './login'
import {useSelector} from 'react-redux'

export default function () {
    const isUserAuthorized = useSelector((state:any )=> state.auth.isUserAuthorized)
    return(
        <div className={"auth-form"}>
            { isUserAuthorized ?
                <Logout />  :
                <Login /> }
        </div>
    )

}
