import {UPDATE_USER,UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,FETCH_PROFILE,FETCH_PROFILE_SUCCESS,RETRIVE_ORDER,RETRIVE_ORDER_SUCCESS,RETRIVE_ORDER_FAILED} from "../constants"

export const fetchProfile=()=>{
    return{
        type:FETCH_PROFILE
    }
}
export const fetchProfileSuccess=(payload:any)=>{
    return{
        type:FETCH_PROFILE_SUCCESS,
        payload
    }
}
export const updateUSer=(payload:any)=>{
    return{
        type: UPDATE_USER,
        payload
    }
}
export const updateUSerSuccess=(payload:any)=>{
    return{
        type: UPDATE_USER_SUCCESS,
        payload
    }
}
export const updateUSerFailed=(payload:any)=>{
    return{
        type: UPDATE_USER_FAILED,
        payload
    }
}


export const retriveOrderDetails=()=>{
    return{
        type: RETRIVE_ORDER,
        
    }
}
export const retriveOrderDetailsSuccess=(payload:any)=>{
    return{
        type: RETRIVE_ORDER_SUCCESS,
        payload
    }
}
export const retriveOrderDetailsFailed=(payload:any)=>{
    return{
        type: RETRIVE_ORDER_FAILED,
        payload
    }
}


