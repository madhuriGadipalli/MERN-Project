import { FETCH_PRODUCTS, FETCHED_PRODUCTS } from "../constants";

const initialState = {};

export const HomeScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state };
    case FETCHED_PRODUCTS:
      const updatedState = { ...state };
      updatedState.products = action?.payload?.data;
      return updatedState;
    default:
      return state;
  }
};
