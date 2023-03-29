import { FETCH_PRODUCTS, FETCHED_PRODUCTS } from "../constants";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};
export const fetchedProducts = (payload) => {
  return {
    type: FETCHED_PRODUCTS,
    payload: payload,
  };
};
