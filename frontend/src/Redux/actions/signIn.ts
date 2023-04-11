import {FETCH_LOGIN,LOGIN_SUCCESS, LOGIN_FAILED} from "../constants"

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