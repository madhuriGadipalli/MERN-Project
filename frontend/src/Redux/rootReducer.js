import { combineReducers } from "redux";

import { HomeScreenReducer } from "./reducers/homeScreen";
import { ProductScreenReducer } from "./reducers/productScreen";
import { CartScreenReducer } from "./reducers/addToCart";
import { SignInReducer } from "./reducers/signIn";



const rootReducer = combineReducers({
  products: HomeScreenReducer,
  productInfo: ProductScreenReducer,
  cartItems: CartScreenReducer,
  signInInfo: SignInReducer,
});

export default rootReducer;
