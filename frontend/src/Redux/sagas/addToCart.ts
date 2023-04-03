import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { saveAddToCart } from "../actions/addToCart";
import { Get,Delete } from "../api";
import { FETCH_ADD_TO_CART,DELETE_CART_ITEM } from "../constants";
import { products,CartProducts } from "../Types/addToCart";

const callCartApi = () => {
  const url = `/api/cart`;
  return Get(url);
};

const deleteCartApi=(id:string)=>{
  const url=`/api/cart/prodId=${id}`;
  return Delete(url)
}


function* getAddToCartProducts():any {
  // const id = payload?.prodId;
  // const qty = payload?.quantiy;
  const response = yield call(callCartApi);
  try {
    yield put(saveAddToCart(response));
  } catch {}
}

function* deleteCartItems({payload}:any):any{
  const response=yield call(deleteCartApi, payload?.prodId)
  try{
    if(response){
    yield* getAddToCartProducts();
    }
  }
  catch{}
}


export default function* addToCartScreenSagas() {
  yield takeLatest(FETCH_ADD_TO_CART, getAddToCartProducts);
  yield takeLatest(DELETE_CART_ITEM, deleteCartItems);
  //   yield all([fetchProducts()]);
}
