import React, {useState} from 'react'
import Search from './elements/search'
import Article from './elements/article'
import {useSelector} from 'react-redux'
import {NavLink} from "react-router-dom";
import './core.css'

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
            {localStorage.isUserAuthorized ?
                <div className={'create-article-link'}>
                    <NavLink to={'/create-article'}>
                        <button>create article()</button>
                    </NavLink>
                </div> : null }
            {filteredArticles.map(article => <Article
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description.substr(0, 256) + ' . . .'}
            />)}
        </>
    )
}