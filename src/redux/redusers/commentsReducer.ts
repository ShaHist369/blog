import initialState from '../data'
import {ADD_COMMENT} from "../actions/types";
const link = 'https://i.insider.com/5df7b8a679d75701fb6bb3a5?width=900&format=jpeg&auto=webp'

type CommentType = {
    commentId: number
    articleId: number
    author: string
    photo: string
    date: string
    time: string
    description: string
}

const comments =(state=initialState.comments,action:any) =>{
    switch (action.type){
        case ADD_COMMENT:
            let newState = [...state];
            let now = new Date();
            let date:string = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();
            let time:string = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            let author:string = String(localStorage.getItem('login'))
            let comment:CommentType = {commentId: Date.now(),
                articleId: action.articleID,
                author: author,
                photo: link,
                date: date,
                time: time,
                description:action.comment}
            newState.push(comment)
            console.log(newState)
            return newState
        default: return state
    }
}

export default comments