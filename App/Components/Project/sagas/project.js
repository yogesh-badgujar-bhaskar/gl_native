// import * as actionTypes from '../../../../../core/constant/actionTypes';
import {takeLatest, fork, call, put} from 'redux-saga/effects';
import * as actionTypes from '../../../core/constants/actionTypes';
import {getProject} from '../services/project.service';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

const _ = {get, isNull};

// watch for User action.

function* watchGetProject() {
  yield takeLatest(actionTypes.PROJECT_REQUEST, workerGetProject);
}

//get project worker

function* workerGetProject(action) {
  try {
    const response = yield call(getProject, action.payload);
    //This is to check if error or not
    const res_body = _.get(response, 'data', {});
    // console.log('res_body', res_body);
    const res_status = true;

    if (res_status) {
      // console.log('success');
      yield put({
        type: actionTypes.PROJECT_SUCCESS,
        payload: _.get(response, 'data', []),
      });
    } else {
      // console.log('failed');
      yield put({
        type: actionTypes.PROJECT_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.PROJECT_FAIL});
  }
}

export default [fork(watchGetProject)];
