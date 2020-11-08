import React from "react";
import {Header} from "../../common/header";
import {Body} from "../../common/body";
import Core from "./core/core";
import Footer from "../../common/footer";



export default function Main(){
    return(
        <>
            <Header />
            <Body core={<Core/>}/>
            <Footer/>
        </>

    )
}