import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import {loginSuccess,loginFailed} from "../actions/signIn";
import { Get, Post } from "../api";
import { FETCH_LOGIN,LOGIN_SESSION } from "../constants";

const callLoginApi = (email:string,password:string) => {
  const url = `/api/user/login`;
  const body={
    email,password
  }
  return Post(url,body);
};

const callLoginSession=()=>{
  const url = `/api/user/login`;
  return Get(url)
}



function* callLogin({payload}:any):any {
  const email = payload?.email;
  const password=payload?.password;
  
  try {
    const response = yield call(callLoginApi, email, password);
    yield put(loginSuccess(response));
    localStorage.setItem('authToken', response.data.token)
  } catch(error) {
    yield put(loginFailed(error))
  }
}

function* loginSession():any{
  try{
    const response=yield call(callLoginSession)
   yield put(loginSuccess(response))
   localStorage.setItem('authToken', response.data.token)
  }catch(error){
    yield put(loginFailed(error))
  }
}


export default function* signInScreenSagas() {
  yield takeLatest(FETCH_LOGIN, callLogin);
  yield takeLatest(LOGIN_SESSION, loginSession)
  //yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
