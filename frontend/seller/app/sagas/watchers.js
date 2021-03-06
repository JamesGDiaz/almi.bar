import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, checkLoginSaga, logoutSaga } from './authenticationSaga';

import * as types from '../store/actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.CHECK_LOGIN_USER, checkLoginSaga)
  yield takeLatest(types.LOGOUT_USER, logoutSaga)
}