import {ADD_ARTICLE, ADD_COMMENT, ADD_TAB, DEL_TAB, LOGIN, LOGOUT} from './types'
import {loginUser, registerUser, logoutUser, ValuesTypes} from '../../DAL/DAL'
import {Dispatch, SetStateAction} from "react";

export type AddTabType = {
    type: string
    name: string
    id: number
}
export type DelTabType = {
    type: string
    id: number
}
export type Action ={
    type: string
}
export type Article ={
    article: string
}
export type Comment ={
    comment: string
    articleID: number
}


export const addTabCreator = (id:number, name:string):AddTabType => {
    return{type: ADD_TAB,
            name: name,
            id: id,
    }
}
export const delTabCreator = (id:number):DelTabType => {
    return{type: DEL_TAB,
        id: id,
    }
}
export const createArticleActionCreator = (value:string):Action & Article => {
    return{type: ADD_ARTICLE,
        article: value,
    }
}
export const addCommentActionCreator = (value:string,articleID:number):Action & Comment  => {
    return{type: ADD_COMMENT,
        comment: value,
        articleID: articleID
    }
}

export const login:Action = {
    type: LOGIN
}
export const logout:Action = {
    type: LOGOUT
}


export const registerUserThunkCreator = (values:ValuesTypes,setError:Dispatch<SetStateAction<boolean>>) =>{
    return async (dispatch:any) =>{
        await registerUser(values,setError)
        return null
    }
}
export const loginUserThunkCreator = (values:ValuesTypes,setError:Dispatch<SetStateAction<boolean>>) =>{
    return async (dispatch:any) =>{
        await loginUser(values,setError)
        return null
    }
}
export const logoutUserThunkCreator = (values:ValuesTypes,setError:(error:string)=>string) =>{
    return async (dispatch:any) =>{
        await logoutUser()
        return null
    }
}