import React from "react";
import './comments.css'

type propsComment={
    comment:CommentType
}
export type CommentType={
    commentId:number
    articleId:number
    author: string
    photo: string
    date: string
    description: string
}
export default function (props:propsComment){
    const comment = props.comment
    return(
        <div className="comment">
            <div className="person">
                <img src={comment.photo} alt=""/>
                <p>{comment.author}</p>
            </div>
            <div className="comment-text">
                <p className='comment-symbol'>/*</p>
                    <p>{comment.description}</p>
                <p className='comment-symbol'>*/</p>
            </div>
        </div>
    )
}