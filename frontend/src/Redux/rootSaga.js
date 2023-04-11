import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import homeSagas from "./sagas/homeScreen";
import productScreenSagas from "./sagas/productScreen";
import addToCartScreenSagas from "./sagas/addToCart";
import signInScreenSagas from "./sagas/SignIn";


export default function* rootSaga() {
  yield all([
    homeSagas(),
    productScreenSagas(),
    addToCartScreenSagas(),
    signInScreenSagas(),
  ]);
}
