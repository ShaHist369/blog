import initialState from '../data'
import {ADD_ARTICLE} from "../actions/types";
import {ArticleType} from "../../pages/main/core/elements/article";

const articles =(state=initialState.data, action:any) =>{
    switch (action.type){
        case ADD_ARTICLE:
            let article:ArticleType = {title:'newArticle',
                id:17,
                author:'alex',
                date: '20.09.2019',
                description: action.article}
            let newState:Array<ArticleType> =  [...state]
            newState.push(article)
            console.log(newState)
            return newState;
        default: return state
    }
}

export default articles