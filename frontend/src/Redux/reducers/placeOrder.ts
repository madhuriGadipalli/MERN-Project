import {SAVE_SHIPPING_ADDRESS,PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILED } from "../constants";

const initialState = {
    res:''
};

export const PlaceOrderReducer = (state = initialState, action:any) => {
  switch (action.type) {
   
    case PLACE_ORDER_SUCCESS:
      const updatedState = { ...state };
      updatedState.res =  action.payload?.data;
      return updatedState;
      case PLACE_ORDER_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.response?.data;
      return upadteFailedState;
    
    default:
      return state;
  }
};
