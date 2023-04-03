import {
  FETCH_PRODUCT,
  FETCHED_PRODUCT,
  ADD_ITEMS_TO_CART,
} from "../constants";

export const fetchProduct = (payload) => {
  return {
    type: FETCH_PRODUCT,
    payload: payload,
  };
};
export const fetchedProduct = (payload) => {
  return {
    type: FETCHED_PRODUCT,
    payload: payload,
  };
};

export const addItemsToCart = (payload) => {
  return {
    type: ADD_ITEMS_TO_CART,
    payload: payload,
  };
};
