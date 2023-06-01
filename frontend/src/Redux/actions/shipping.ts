import {SAVE_SHIPPING_ADDRESS,SAVE_SHIPPING_ADDRESS_SUCCESS, SAVE_SHIPPING_ADDRESS_FAILED} from "../constants"

export const saveShippingAddress=(payload:any)=>{
    return{
        type: SAVE_SHIPPING_ADDRESS,
        payload
    }
}
export const saveShippingAddressSuccess=(payload:any)=>{
    return{
        type: SAVE_SHIPPING_ADDRESS_SUCCESS,
        payload
    }
}
export const saveShippingAddressFailed=(payload:any)=>{
    return{
        type: SAVE_SHIPPING_ADDRESS_FAILED,
        payload
    }
}

