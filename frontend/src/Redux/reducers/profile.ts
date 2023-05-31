import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  RETRIVE_ORDER_SUCCESS,
  RETRIVE_ORDER_FAILED,
} from "../constants";

const initialState = {
  res: "",
  orders: "",
};

export const ProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      const profileState = { ...state };
      profileState.res = action.payload?.data;
      return profileState;
    case UPDATE_USER:
      return { ...state };
    case UPDATE_USER_SUCCESS:
      const updatedState = { ...state };
      updatedState.res = action.payload?.data;
      return updatedState;
    case UPDATE_USER_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.response?.data;
      return upadteFailedState;

    case RETRIVE_ORDER_SUCCESS:
      const orderDetails = { ...state };
      orderDetails.orders = action.payload?.data;
      return orderDetails;

    case RETRIVE_ORDER_FAILED:
      const orderDetailsFailed = { ...state };
      orderDetailsFailed.orders = action.payload?.data;
      return orderDetailsFailed;

    default:
      return state;
  }
};
