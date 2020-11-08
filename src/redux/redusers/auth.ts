import {LOGIN, LOGOUT} from '../actions/types'
let initialState:initialStateType = {
    isUserAuthorized: false
}
type initialStateType = {
    isUserAuthorized: boolean
}

const auth =(state=initialState,action:any) =>{
    switch (action.type){
        case LOGOUT:
            let LogoutState:initialStateType = {...state}
            LogoutState.isUserAuthorized = false
            return LogoutState;
        case LOGIN:
            let LoginState:initialStateType = {...state}
            LoginState.isUserAuthorized = true
            return LoginState;

        default: return state
    }
}


export default auth