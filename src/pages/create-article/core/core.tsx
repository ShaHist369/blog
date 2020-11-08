import React from "react";
import FormContainer from './elements/form-container'
import {useDispatch} from 'react-redux'
import { createArticleActionCreator } from "../../../redux/actions/actions";

export default function () {
    const dispatch = useDispatch()
    const createArticle = (values:any) =>{
        let action = createArticleActionCreator(values.textarea)
        dispatch(action)
    }
    return(
        <>
            <FormContainer onSubmit={createArticle}/>
        </>
    )
}