import { combineReducers } from "redux";

import { HomeScreenReducer } from "./reducers/homeScreen";
import { ProductScreenReducer } from "./reducers/productScreen";
import { CartScreenReducer } from "./reducers/addToCart";
import { SignInReducer } from "./reducers/signIn";
import { RegisterReducer } from "./reducers/register";
import { ProfileReducer } from "./reducers/profile";
import { ShippingReducer } from "./reducers/shipping";
import { PaymentReducer } from "./reducers/payment";
import { CommonReducer } from "./reducers/commons";
import { PlaceOrderReducer } from "./reducers/placeOrder";
import { OrderReducer } from "./reducers/Order";

const rootReducer = combineReducers({
  products: HomeScreenReducer,
  productInfo: ProductScreenReducer,
  cartItems: CartScreenReducer,
  signInInfo: SignInReducer,
  registerInfo: RegisterReducer,
  profileInfo: ProfileReducer,
  shippingInfo: ShippingReducer,
  PaymentInfo: PaymentReducer,
  Commons: CommonReducer,
  PlaceOrderInfo: PlaceOrderReducer,
  OrderInfo: OrderReducer,
});

export default rootReducer;
