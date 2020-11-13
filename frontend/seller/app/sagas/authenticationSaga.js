import { put, call } from "redux-saga/effects";
import { registerUserService, loginUserService, checkLoginService } from "../services/authenticationService";

import * as types from "../store/actions";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* checkLoginSaga(payload) {
  try {
    const response = yield call(checkLoginService, payload);
    yield put({ type: types.CHECK_LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.CHECK_LOGIN_USER_ERROR, error });
  }
}
