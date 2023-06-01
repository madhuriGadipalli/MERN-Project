import {SAVE_SHIPPING_ADDRESS,SAVE_SHIPPING_ADDRESS_SUCCESS, SAVE_SHIPPING_ADDRESS_FAILED } from "../constants";

const initialState = {
    res:''
};

export const ShippingReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SAVE_SHIPPING_ADDRESS:
           return {...state};
    case SAVE_SHIPPING_ADDRESS_SUCCESS:
      const updatedState = { ...state };
      updatedState.res =  action.payload?.data;
      return updatedState;
      case SAVE_SHIPPING_ADDRESS_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.response?.data;
      return upadteFailedState;
    
    default:
      return state;
  }
};
