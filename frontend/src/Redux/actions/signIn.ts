import {FETCH_LOGIN,LOGIN_SUCCESS, LOGIN_FAILED,LOGOUT_USER,LOGIN_SESSION} from "../constants"

export const fetchLogin=(payload:any)=>{
    return{
        type: FETCH_LOGIN,
        payload
    }
}
export const loginSuccess=(payload:any)=>{
    return{
        type: LOGIN_SUCCESS,
        payload
    }
}
export const loginFailed=(payload:any)=>{
    return{
        type: LOGIN_FAILED,
        payload
    }
}

export const loginSession=()=>{
    return{
        type: LOGIN_SESSION,
   }
}


export const logoutUser=()=>{
    return{
        type:LOGOUT_USER
    }
}