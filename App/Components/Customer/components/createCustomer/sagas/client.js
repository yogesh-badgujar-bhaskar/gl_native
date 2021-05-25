import {call, fork, put, takeLatest} from '@redux-saga/core/effects';
import * as actionTypes from '../../../core/constants/actionTypes';
import {createClient} from '../services/client.service';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

const _ = {get, isNull};

function* WorkerCreateClient(action) {
  console.log('workerCreateClient called', action.payload);
  try {
    const response = yield call(createClient, action.payload);
    const res_body = _.get(response, 'data', {});
    const res_status = _.get(res_body, 'status', true);
    console.log('res_status', res_status);
    if (res_status) {
      yield put({
        type: actionTypes.CLIENT_CREATE_SUCCESS,
        payload: res_body,
      });
    } else {
      yield put({
        type: actionTypes.CLIENT_CREATE_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CLIENT_CREATE_FAIL});
  }
}

function* watchCreateClient() {
  // console.log('saga watchCreatClient called');
  yield takeLatest(actionTypes.CLIENT_CREATE_REQUEST, WorkerCreateClient);
}

export default [fork(watchCreateClient)];
