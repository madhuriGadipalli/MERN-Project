import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { placeOrderSuccess,placeOrderFailed } from "../actions/placeOrder";
import { Get, Post } from "../api";
import { PLACE_ORDER } from "../constants";
import { navigateToPage } from "../actions/common";

const callOrderDetailsApi = (payload:any) => {
  const url = `/api/order`;
 
  return Post(url,payload);
};



function* placeOrderDetails({payload}:any):any {
//   const name = payload?.name;
//   const email = payload?.email;
//   const password=payload?.password;

  try {
    const response = yield call(callOrderDetailsApi, payload);
    const page = `/order/${response?.data?._id}`;
    yield put(placeOrderSuccess(response));
    yield put(navigateToPage(page));
    
  } catch(error) {
    yield put(placeOrderFailed(error))
  }
}


export default function* placeOrderScreenSagas() {
  yield takeLatest(PLACE_ORDER, placeOrderDetails);
}
