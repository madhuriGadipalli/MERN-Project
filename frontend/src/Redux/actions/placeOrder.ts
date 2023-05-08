import {PLACE_ORDER,PLACE_ORDER_SUCCESS,PLACE_ORDER_FAILED} from "../constants"

export const placeOrder=(payload:any)=>{
    return{
        type: PLACE_ORDER,
        payload
    }
}
export const placeOrderSuccess=(payload:any)=>{
    return{
        type: PLACE_ORDER_SUCCESS,
        payload
    }
}
export const placeOrderFailed=(payload:any)=>{
    return{
        type: PLACE_ORDER_FAILED,
        payload
    }
}

