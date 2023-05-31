import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  updateUSer,
  updateUSerSuccess,
  updateUSerFailed,
  fetchProfileSuccess,
  retriveOrderDetailsSuccess,
} from "../actions/profile";
import { Get, Post, Put } from "../api";
import { UPDATE_USER, FETCH_PROFILE, RETRIVE_ORDER } from "../constants";

const callUpdateProfileApi = (
  name: string,
  email: string,
  password: string
) => {
  const url = `/api/user`;
  const body = {
    name,
    email,
    password,
  };
  return Put(url, body);
};

const callFetchProfileApi = () => {
  const url = `/api/user/profile`;

  return Get(url);
};

const callfetchOrdersApi = () => {
  const url = `/api/user/orders`;
  return Get(url);
};

function* updateProfile({ payload }: any): any {
  const name = payload?.name;
  const email = payload?.email;
  const password = payload?.password;

  try {
    const response = yield call(callUpdateProfileApi, name, email, password);
    yield put(updateUSerSuccess(response));
  } catch (error) {
    yield put(updateUSerFailed(error));
  }
}

function* fetchProfileData(): any {
  try {
    const response = yield call(callFetchProfileApi);
    yield put(fetchProfileSuccess(response));
  } catch (error) {
    //  yield put(updateUSerFailed(error))
  }
}

function* getUserOrders(): any {
  try {
    const response = yield call(callfetchOrdersApi);
    yield put(retriveOrderDetailsSuccess(response));
  } catch (error) {
    //  yield put(updateUSerFailed(error))
  }
}

export default function* profileScreenSagas() {
  yield takeLatest(UPDATE_USER, updateProfile);
  yield takeLatest(FETCH_PROFILE, fetchProfileData);
  yield takeLatest(RETRIVE_ORDER, getUserOrders);
  //yield all([updateProfile(),fetchProfileData()]);
}
