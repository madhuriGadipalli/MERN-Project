import {SAVE_PAYMENT_TYPE } from "../constants";

const initialState = {
  paymentType:''
};

export const PaymentReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SAVE_PAYMENT_TYPE:
      const updatedState = { ...state };
      updatedState.paymentType=action.payload
      return updatedState
    // case REGISTER_USER_SUCCESS:
    //   const updatedState = { ...state };
    //   updatedState.res =  action.payload?.data;
    //   return updatedState;
    //   case REGISTER_USER_FAILED:
    //   const upadteFailedState = { ...state };
    //   upadteFailedState.res = action.payload?.response?.data;
    //   return upadteFailedState;
    //  case CLEAR_REGISTRATION_DATA:
    //   const clearData={...state};
    //   clearData.res='';
    //   return clearData;
    default:
      return state;
  }
};
