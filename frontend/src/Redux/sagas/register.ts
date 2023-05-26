import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { createUSer,createUSerSuccess,createUSerFailed } from "../actions/register";
import { Get, Post } from "../api";
import { REGISTER_USER } from "../constants";

const callRegisterApi = (name:string,email:string,password:string) => {
  const url = `/api/user`;
  const body={
    name,email,password
  }
  return Post(url,body);
};



function* callRegister({payload}:any):any {
  const name = payload?.name;
  const email = payload?.email;
  const password=payload?.password;
  
  try {
    const response = yield call(callRegisterApi, name,email, password);
    yield put(createUSerSuccess(response));
    localStorage.setItem('authToken', response.data.token)
  } catch(error) {
    yield put(createUSerFailed(error))
  }
}


export default function* registerScreenSagas() {
  yield takeLatest(REGISTER_USER, callRegister);
  //yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
