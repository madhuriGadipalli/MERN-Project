import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import homeSagas from "./sagas/homeScreen";
import productScreenSagas from "./sagas/productScreen";
import addToCartScreenSagas from "./sagas/cart";
import signInScreenSagas from "./sagas/SignIn";
import registerScreenSagas from "./sagas/register";
import profileScreenSagas from "./sagas/profile";
import shippingScreenSagas from "./sagas/shipping";
import placeOrderScreenSagas from "./sagas/placeOrder";
import OrderScreenSagas from "./sagas/order";

export default function* rootSaga() {
  yield all([
    homeSagas(),
    productScreenSagas(),
    addToCartScreenSagas(),
    signInScreenSagas(),
    registerScreenSagas(),
    profileScreenSagas(),
    shippingScreenSagas(),
    placeOrderScreenSagas(),
    OrderScreenSagas(),
  ]);
}
