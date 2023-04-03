import { FETCH_ADD_TO_CART, FETCHED_ADD_TO_CART } from "../constants";

const initialState = {
    products:{}
};

export const CartScreenReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_ADD_TO_CART:
      return { ...state };
    case FETCHED_ADD_TO_CART:
      const updatedState = { ...state };
      updatedState.products = action?.payload?.data;
      return updatedState;
    default:
      return state;
  }
};
