import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from '../../../core/constants/actionTypes';
// import  getUser  from '../services/user_services';
import {getUser} from '../services/user_services';

import get from "lodash/get";
import isNull from "lodash/isNull";
const _ = { get, isNull };

//********************** GET EMPLOYEES LIST ACTION ******************************************************** */
function* workerGetUsers(action) {
    // code for handling get Employee.
    try {
   
      
      // console.log("saga try", getUser);
      const response = yield call(getUser, action.payload);
      
      // console.log("response" , response);
      //This is to check if error or not
      const res_body = _.get(response, "data.data", {});
    
      const res_status = _.get(res_body, "status", true);
      // console.log("response status" , res_status);
      
      if (res_status) {
        yield put({
          type: actionTypes.USER_SUCCESS,
          payload: _.get(response, "data", [])
        });
      } else {
        yield put({
          type: actionTypes.USER_FAIL,
          payload: res_body
        });
      }
    } catch (err) {
      yield put({ type: actionTypes.USER_FAIL });
    }
  }
  
  // watch for employee action.
  function* watchGetUsers() {
    yield takeLatest(actionTypes.USER_START, workerGetUsers);
  }
  
  // running employee related saga.
export default [
    fork(watchGetUsers),
  ];
  