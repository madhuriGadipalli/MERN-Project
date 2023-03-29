import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { fetchedProducts } from "../actions/homeScreen";
import { Get } from "../api";
import { FETCH_PRODUCTS } from "../constants";

const callProducsApi = () => {
  const url = "/api/products";
  return Get(url);
};

function* getProducts() {
  const response = yield call(callProducsApi);
  try {
    yield put(fetchedProducts(response));
  } catch {}
}

export default function* homeSagas() {
  yield takeLatest(FETCH_PRODUCTS, getProducts);
  //   yield all([fetchProducts()]);
}
