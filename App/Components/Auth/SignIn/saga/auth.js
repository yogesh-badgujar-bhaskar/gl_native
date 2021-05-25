import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from '../../../../core/constants/actionTypes';
import {loginApi } from '../services/signIn.service';
import AsyncStorage from "@react-native-community/async-storage";

import get from "lodash/get";
const _ = { get };


async function storeToken(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}

export function* login(email, password) {
  try {
    // get your token
    const token = yield call(loginApi, email, password);

    // store token to local storage
    yield call(storeToken, token);

    yield put( actionTypes.SUCCESS_LOGIN );

  } catch (error) {
    yield put( actionTypes.ERROR_LOGIN , error);
  }
}

































// function* workerLogout() {
//   // code for handling registration.
//   yield put({ type: actionTypes.DELETE_OAUTH_TOKEN });
// }

// function* workerLogin(action) {
//   // code for handling login.
//   try {
//     const response = yield call(authentication, action.payload);
//     //This is to check if error or not
//     const res_body = _.get(response, "data.data");
//     const res_status = _.get(res_body, "status", 200);
//     if (res_status === 200) {
//       yield put({
//         type: actionTypes.SAVE_OAUTH_TOKEN,
//         payload: response.data
//       });
//     } else {

//       yield put({
//         type: actionTypes.ERROR_LOGIN,
//         payload: res_body
//       });
//     }
//   } catch (err) {
//     yield put({ type: actionTypes.ERROR_LOGIN });
//   }
// }

// // watch for registration action.
// function* watchLogout() {
//   yield takeLatest(actionTypes.REQUEST_LOGOUT, workerLogout);
// }

// // watch for login action.
// function* watchLogin() {
//   yield takeLatest(actionTypes.REQUEST_LOGIN, workerLogin);
// }

// // running auth related saga.
// export default [fork(watchLogin), fork(watchLogout)];

// // Note: just demo code, not in used anywhere.
