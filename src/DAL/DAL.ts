import firebase from "firebase";
import {logout,login} from "../redux/actions/actions";
import {Dispatch, SetStateAction} from "react";

export type ValuesTypes ={
    login: string
    password: string
}

export const registerUser = async (values:ValuesTypes,setError: Dispatch<SetStateAction<boolean>>) =>{
    firebase.auth().createUserWithEmailAndPassword(values.login, values.password).catch(function(error) {
        setError(error.message);
    });
}
export const loginUser = (values:ValuesTypes, setError:Dispatch<SetStateAction<boolean>>) =>{
    firebase.auth().signInWithEmailAndPassword(values.login, values.password).catch(function(error) {
        setError(error.message);
    });
}
export const logoutUser = () =>{
    firebase.auth().signOut().catch(function(error) {});
}
type actionType = {
    type: string
}
export const observerUser = (dispatch:(action:actionType)=>void) =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            dispatch(login)
            let email:string = String(user.email)
            localStorage.setItem('isUserAuthorized', 'true')
            localStorage.setItem('login', email)
            return true
        } else {
            dispatch(logout)
            localStorage.setItem('isUserAuthorized', '')
            localStorage.setItem('login', '')
            return false
        }
    });
}
