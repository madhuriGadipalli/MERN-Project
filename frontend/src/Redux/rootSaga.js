import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import homeSagas from "./sagas/homeScreen";


export default function* rootSaga() {
  yield all([
    homeSagas(),
  ]);
}
