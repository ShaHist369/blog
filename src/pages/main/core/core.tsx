import React, {useState} from 'react'
import Search from './elements/search'
import Article from './elements/article'
import {useSelector} from 'react-redux'
import {NavLink} from "react-router-dom";

export type TypeArticle = {
    title: string
    id: number
    date: string
    author: string
    description: string
}

export const Core:()=> JSX.Element = () =>{

    const[filter,setFilter]=useState<string>('')
    const allArticles:Array<TypeArticle> = useSelector((store:any) => store.articles)
    let filteredArticles = allArticles.filter(article =>{
        return article.title.toLowerCase().includes(filter.toLowerCase())
    })



    return(
        <>
            <Search setFilter={setFilter}/>
            {localStorage.isUserAuthorized ? <NavLink to={'/create-article'}>create article</NavLink> : null }
            {filteredArticles.map(article => <Article
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
            />)}
        </>
    )
}