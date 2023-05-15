import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { getPaypalSecretKeySuccess } from "../actions/common";
import {payOrderSuccess,payOrderFailed,getorderDeatilsSuccess} from "../actions/Order"
import { Get, Post, Put } from "../api";
import { REQUEST_PAYPAL_SECRET_KEY,PAY_ORDER,GET_ORDER_DETAILS } from "../constants";


const callPaypalSecretKeyApi = () => {
  const url = `/paypal/secretKey`;
   return Get(url);
};

const callOrderApi = (orderId:any) => {
    const url = `/api/order/${orderId}`;
     return Get(url);
  };


const callPayOrderApi = (orderId:any,paymentResult:any) => {
    const url = `/api/order/${orderId}/pay`;
     return Put(url, paymentResult);
  };



function* getPaypalSecretKey():any {
  try {
    const response = yield call(callPaypalSecretKeyApi);
    yield put(getPaypalSecretKeySuccess(response));
       
  } catch(error) {
    
  }
}

function* payOrder({payload}:any):any {
    try {
      const response = yield call(callPayOrderApi, payload.id,payload.paymentResult);
      yield put(payOrderSuccess(response));
            
    } catch(error) {
      
    }
  }

  function* getOrderInfo({payload}:any):any {
    try {
      const response = yield call(callOrderApi, payload.id);
      yield put(getorderDeatilsSuccess(response));
            
    } catch(error) {
      
    }
  }


export default function* OrderScreenSagas() {
  yield takeLatest(REQUEST_PAYPAL_SECRET_KEY, getPaypalSecretKey);
  yield takeLatest(GET_ORDER_DETAILS, getOrderInfo)
  yield takeLatest(PAY_ORDER,payOrder)
}
