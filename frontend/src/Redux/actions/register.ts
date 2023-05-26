import {REGISTER_USER,REGISTER_USER_SUCCESS, REGISTER_USER_FAILED,CLEAR_REGISTRATION_DATA} from "../constants"

export const createUSer=(payload:any)=>{
    return{
        type: REGISTER_USER,
        payload
    }
}
export const createUSerSuccess=(payload:any)=>{
    return{
        type: REGISTER_USER_SUCCESS,
        payload
    }
}
export const createUSerFailed=(payload:any)=>{
    return{
        type: REGISTER_USER_FAILED,
        payload
    }
}

export const clearData=()=>{
    return{
        type:CLEAR_REGISTRATION_DATA
    }
}