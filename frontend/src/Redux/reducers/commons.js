import {
  NAVIGATE_TO_PAGE,
  REQUEST_PAYPAL_SECRET_KEY_SUCEESS,
} from "../constants";

const initialState = {};

export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO_PAGE:
      const updatedState = { ...state };
      updatedState.page = action?.payload?.page;
      return updatedState;
    case REQUEST_PAYPAL_SECRET_KEY_SUCEESS:
      const paypalState = { ...state };
      paypalState.paypalSecretKey = action?.payload?.data;
      return paypalState;
    default:
      return state;
  }
};
