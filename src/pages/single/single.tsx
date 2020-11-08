import React from "react";
import {Header} from "../../common/header";
import {Body} from '../../common/body'
import Core from "./core/core";
import Footer from "../../common/footer";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {TypeArticle} from '../main/core/core'


function Single ({match,history}: RouteComponentProps<any>){
    const allArticles:Array<TypeArticle> = useSelector((store:any) => store.articles)
    const id = parseInt(match.params.id,10);
    let article = allArticles.filter(article => article.id === id);
    if(article[0] === undefined){
        article = [{
            id:0,
            date:'nothing',
            author:'nobody',
            title:'nothing',
            description:'nothing'

        }]
        history.push('/404');
    }
    return(
        <>
            <Header />
            <Body core={<Core article={article}/>}/>
            <Footer/>
        </>
    )
}
export default withRouter(Single)