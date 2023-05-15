import {
  GET_ORDER_DETAILS,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  PAY_ORDER,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
  PAY_ORDER_RESET,
} from "../constants";

export const getorderDeatils = (payload: any) => {
  return {
    type: GET_ORDER_DETAILS,
    payload,
  };
};
export const getorderDeatilsSuccess = (payload: any) => {
  return {
    type: GET_ORDER_DETAILS_SUCCESS,
    payload,
  };
};
export const getorderDeatilsFailed = (payload: any) => {
  return {
    type: GET_ORDER_DETAILS_FAILED,
    payload,
  };
};

export const payOrder = (payload: any) => {
  return {
    type: PAY_ORDER,
    payload,
  };
};
export const payOrderSuccess = (payload: any) => {
  return {
    type: PAY_ORDER_SUCCESS,
    payload,
  };
};
export const payOrderFailed = (payload: any) => {
  return {
    type: PAY_ORDER_FAILED,
    payload,
  };
};
export const payOrderReset = () => {
  return {
    type: PAY_ORDER_RESET,
  };
};
