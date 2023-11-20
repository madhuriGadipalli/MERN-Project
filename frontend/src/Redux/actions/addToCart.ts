import { FETCH_ADD_TO_CART, FETCHED_ADD_TO_CART,DELETE_CART_ITEM, ADD_ITEMS_TO_CART } from "../constants";
import {products} from '../Types/addToCart'

export const addToCart = () => {
  return {
    type: FETCH_ADD_TO_CART,
    
  };
};
export const saveAddToCart = (payload:any) => {
  return {
    type: FETCHED_ADD_TO_CART,
    payload: payload,
  };
};

export const deleteItems=(payload:any)=>{
  return{
    type:DELETE_CART_ITEM,
    payload:payload
  }
}
export const addItemsToCart = (payload:any) => {
  return {
    type: ADD_ITEMS_TO_CART,
    payload: payload,
  };
};
