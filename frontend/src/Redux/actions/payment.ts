import {SAVE_PAYMENT_TYPE,SAVE_PAYMENT_TYPE_SUCCESS, SAVE_PAYMENT_TYPE_FAILED} from "../constants"

export const savePaymentType=(payload:any)=>{
    return{
        type: SAVE_PAYMENT_TYPE,
        payload
    }
}
export const savePaymentTypeSuccess=(payload:any)=>{
    return{
        type: SAVE_PAYMENT_TYPE_SUCCESS,
        payload
    }
}
export const savePaymentTypeFailed=(payload:any)=>{
    return{
        type: SAVE_PAYMENT_TYPE_FAILED,
        payload
    }
}

