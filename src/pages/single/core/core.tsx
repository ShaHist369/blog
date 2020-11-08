import React from "react";
import Article from "../../main/core/elements/article";
import Comment from './elements/comments'
import './core.css'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux";
import CommentFormContainer from "./elements/comment-form-container";
import {addCommentActionCreator} from "../../../redux/actions/actions";
import {TypeArticle} from "../../main/core/core";
import {CommentType} from './elements/comments'

type SinglePropsType = {
        article:TypeArticle[]
}

function Single (props:SinglePropsType){
        const currentArticle = props.article[0]
        const commentsArray:Array<CommentType> = useSelector( (state:any) => {
                let allComments = state.comments
                let currentComments = allComments.filter((comment:CommentType) => comment.articleId === currentArticle.id)
                return currentComments
        })
        const dispatch = useDispatch();

        type ValuesComment = {
                comment: string
        }
        const addComment:any = (values:ValuesComment) =>{
                let action = addCommentActionCreator(values.comment,currentArticle.id)
                dispatch(action)
        }
        return(
            <div className='single-article'>
                <Article
                    key={props.article[0].id}
                    id={props.article[0].id}
                    title={props.article[0].title}
                    date={props.article[0].date}
                    author={props.article[0].author}
                    description={props.article[0].description}
                />


                {localStorage.isUserAuthorized ? <CommentFormContainer onSubmit ={addComment}/> : null }


                {commentsArray.map((comment:CommentType) =><Comment
                    key={comment.commentId}
                    comment={comment}
                />)}
            </div>
        )

}

export default Single;