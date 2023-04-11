import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { fetchLogin,loginSuccess,loginFailed } from "../actions/signIn";
import { Get, Post } from "../api";
import { FETCH_LOGIN,LOGIN_SUCCESS, LOGIN_FAILED } from "../constants";

const callLoginApi = (email:string,password:string) => {
  const url = `/api/user/login`;
  const body={
    email,password
  }
  return Post(url,body);
};



function* callLogin({payload}:any):any {
  const email = payload?.email;
  const password=payload?.password;
  
  try {
    const response = yield call(callLoginApi, email, password);
    yield put(loginSuccess(response));
  } catch(error) {
    yield put(loginFailed(error))
  }
}


export default function* signInScreenSagas() {
  yield takeLatest(FETCH_LOGIN, callLogin);
  //yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
