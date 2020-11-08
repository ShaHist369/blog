import React from 'react'
import {Header} from '../../common/header'
import Footer from '../../common/footer'
import {Body} from '../../common/body'
import {Core} from './core/core'



export default function Main(){
    return(
        <>
            <Header />
            <Body core={<Core/>}/>
            <Footer/>
        </>

    )
}