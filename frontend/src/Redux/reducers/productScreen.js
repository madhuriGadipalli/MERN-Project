import { FETCH_PRODUCT, FETCHED_PRODUCT } from "../constants";

const initialState = {};

export const ProductScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state };
    case FETCHED_PRODUCT:
      const updatedState = { ...state };
      updatedState.product = action?.payload?.data;
      return updatedState;

    default:
      return state;
  }
};
