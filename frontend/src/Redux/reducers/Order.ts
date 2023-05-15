import {
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  PAY_ORDER_RESET,
} from "../constants";

const initialState = {
  res: "",
  success: false,
  order: {},
};

export const OrderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_SUCCESS:
      const orderState = { ...state };
      orderState.order = action.payload?.data;
      return orderState;

    case PAY_ORDER_SUCCESS:
      const updatedState = { ...state };
      updatedState.success = true;
      return updatedState;
    case PAY_ORDER_RESET:
      const resetState = { ...state };
      resetState.success = false;
      return resetState;
    case PAY_ORDER_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.data;
      return upadteFailedState;

    default:
      return state;
  }
};
