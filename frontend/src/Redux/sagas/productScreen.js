import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { fetchedProduct } from "../actions/productScreen";
import { Get, Post } from "../api";
import { FETCH_PRODUCT, ADD_ITEMS_TO_CART } from "../constants";

const callProductApi = (id) => {
  const url = `/api/products/${id}`;
  return Get(url);
};

const callAddToCartItems = (id, qty) => {
  const url = `/api/addToCart/prodId=${id}/qty=${qty}`;
  return Post(url);
};

function* getProduct(payload) {
  const id = payload.payload?.id;
  const response = yield call(callProductApi, id);
  try {
    yield put(fetchedProduct(response));
  } catch {}
}

function* addItemsToCart({ payload }) {
  const id = payload.id;
  const qty = payload.qty;
  const response = yield call(callAddToCartItems, id, qty);
  if (response) {
    console.log("res", response);
  }
}

export default function* productScreenSagas() {
  yield takeLatest(FETCH_PRODUCT, getProduct);
  yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
