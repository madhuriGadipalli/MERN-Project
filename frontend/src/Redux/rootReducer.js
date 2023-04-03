import { combineReducers } from "redux";

import { HomeScreenReducer } from "./reducers/homeScreen";
import { ProductScreenReducer } from "./reducers/productScreen";
import { CartScreenReducer } from "./reducers/addToCart";



const rootReducer = combineReducers({
  products: HomeScreenReducer,
 productInfo: ProductScreenReducer,
  cartItems: CartScreenReducer,
});

export default rootReducer;
