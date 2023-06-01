import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { saveShippingAddressSuccess,saveShippingAddressFailed } from "../actions/shipping";
import { Get, Post } from "../api";
import { SAVE_SHIPPING_ADDRESS } from "../constants";

interface shipping{
  address:string,
  city:string,
  postalCode:string,
  country:string
}

const callShippingApi=( {address,city,postalCode,country}:shipping) => {
  const url = `/api/shipping`;
  const body={
    address,city,postalCode,country
  }
  return Post(url,body);
};



function* saveShippingAddress({payload}:any):any {
  const address = payload?.address;
  const city = payload?.city;
  const postalCode=payload?.postalCode;
  const country=payload?.country
  
  try {
    const response = yield call(callShippingApi, {address,city, postalCode,country});
    yield put(saveShippingAddressSuccess(response));
   
  } catch(error) {
    yield put(saveShippingAddressFailed(error))
  }
}


export default function* shippingScreenSagas() {
  yield takeLatest(SAVE_SHIPPING_ADDRESS, saveShippingAddress);
  //yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
