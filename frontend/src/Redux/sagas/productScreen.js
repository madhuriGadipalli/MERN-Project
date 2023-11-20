import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  fetchedProduct,
  addItemsToCartSuccess,
} from "../actions/productScreen";
import { addToCart } from "../actions/addToCart";
import { Get, Post } from "../api";
import { FETCH_PRODUCT, ADD_ITEMS_TO_CART } from "../constants";
import { navigateToPage } from "../actions/common";
import { store } from "../store";

const callProductApi = (id) => {
  const url = `/api/products/${id}`;
  return Get(url);
};

const callAddToCartItems = async (id, qty) => {
  const url = `/api/cart/prodId=${id}/qty=${qty}`;
  return await Post(url);
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

  const state = store.getState();
  console.log("stateeee", state);

  const page = `/cart?prodId=${id}&qty=${qty}`;
  const response = yield call(callAddToCartItems, id, qty);
  if (response) {
    yield put(addToCart());
    yield put(navigateToPage(page));

    // yield call(navigateToPage, page);
  }
}

export default function* productScreenSagas() {
  yield takeLatest(FETCH_PRODUCT, getProduct);
  yield takeLatest(ADD_ITEMS_TO_CART, addItemsToCart);
  //   yield all([fetchProducts()]);
}
