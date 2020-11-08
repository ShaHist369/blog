import React from "react";
import {logoutUser} from "../../../DAL/DAL";

export default function (){

    return(
        <button onClick={logoutUser}>logout</button>
    )
}