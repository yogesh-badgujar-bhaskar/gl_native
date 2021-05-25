// import * as actionTypes from '../../../../../core/constant/actionTypes';
import {takeLatest, fork, call, put} from 'redux-saga/effects';
import * as actionTypes from '../../../core/constants/actionTypes';
import {
  getCustomer,
  deleteCustomer,
  createCustomer,
  updateCustomer,
  getCustomerById,
} from '../services/customer.service';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

const _ = {get, isNull};

//get project worker

function* workerGetCustomer(action) {
  // code for handling get Customer.
  console.log('worker of get user called successfully', action.payload);
  try {
    const response = yield call(getCustomer, action.payload);
    //This is to check if error or not
    const res_body = _.get(response, 'data', {});
    // console.log('res_body', res_body);
    const res_status = true;

    if (res_status) {
      // console.log('success');
      yield put({
        type: actionTypes.CUSTOMER_SUCCESS,
        payload: _.get(response, 'data', []),
      });
    } else {
      // console.log('failed');
      yield put({
        type: actionTypes.CUSTOMER_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CUSTOMER_FAIL});
  }
}

// watch for Customer action.

function* watchGetCustomer() {
  console.log('watch get request on customer');
  yield takeLatest(actionTypes.CUSTOMER_REQUEST, workerGetCustomer);
}

//  The worker Delete function working here

function* workerDeleteCustomer(action) {
  //code for deleting the project
  try {
    const response = yield call(deleteCustomer, action.payload);
    //this is to check if error or not
    const res_body = _.get(response, 'data', {});
    const res_status = _.get(res_body, 'status', true);

    if (res_status) {
      yield put({
        type: actionTypes.CUSTOMER_DELETE_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: actionTypes.CUSTOMER_DELETE_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CUSTOMER_DELETE_FAIL});
  }
}

//Watch for user delete action
function* watchDeleteCustomer() {
  yield takeLatest(actionTypes.CUSTOMER_DELETE_REQUEST, workerDeleteCustomer);
}

//********************** CREATE CUSTOMER ACTION ******************************************************** */
function* workerCreateCustomer(action) {
  // code for handling get customer.
  try {
    const response = yield call(createCustomer, action.payload);
    console.log('saga create');
    //This is to check if error or not
    const res_body = _.get(response, 'data', {});
    const res_status = _.get(res_body, 'status', true);
    console.log('response', response);
    if (res_status) {
      yield put({
        type: actionTypes.CUSTOMER_CREATE_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: actionTypes.CUSTOMER_CREATE_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CUSTOMER_CREATE_FAIL});
  }
}
// watch for customer action.
function* watchCreateCustomer() {
  yield takeLatest(actionTypes.CUSTOMER_CREATE_REQUEST, workerCreateCustomer);
}

/********************** GET CUSTOMER DETAIL ACTION ******************************************************** */
function* workerGetCustomerById(action) {
  // code for handling get Employee.
  try {
    console.log('saga file');
    const response = yield call(getCustomerById, action.payload);

    //This is to check if error or not
    const res_body = _.get(response, 'data.data', {});
    const res_status = _.get(res_body, 'status', true);
    const customer = _.get(response, 'data.data', {});
    console.log('Customer', customer);
    if (res_status) {
      yield put({
        type: actionTypes.CUSTOMER_GET_DETAILS_SUCCESS,
        payload: customer,
      });
      // if (
      //   !_.isNull(action.loginUserId) &&
      //   action.loginUserId === action.payload
      // )
      {
        yield put({
          type: actionTypes.AUTH_UPDATE_USER,
          payload: employee,
        });
      }
    } else {
      yield put({
        type: actionTypes.CUSTOMER_GET_DETAILS_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CUSTOMER_GET_DETAILS_FAIL});
  }
}

// watch for User action.
function* watchGetCustomerById() {
  yield takeLatest(
    actionTypes.CUSTOMER_GET_DETAILS_REQUEST,
    workerGetCustomerById,
  );
}

//********************** UPDATE CUSTOMER ACTION ******************************************************** */
function* workerUpdateCustomer(action) {
  // code for handling get Employee.

  try {
    const response = yield call(updateCustomer, action.payload);
    console.log('update saga', response);
    //This is to check if error or not
    const res_body = _.get(response, 'data', {});
    console.log('req body', res_body);
    const res_status = _.get(res_body, 'status', true);
    console.log('reS body', res_body);

    if (res_status) {
      yield put({
        type: actionTypes.CUSTOMER_UPDATE_SUCCESS,
        payload: response.data,
      });
      // if (
      //   !_.isNull(action.payload.loginUserId) &&
      //   action.payload.customer.id === action.payload.loginUserId
      // )
      {
        yield put({
          type: actionTypes.CUSTOMER_GET_DETAILS_REQUEST,
          payload: action.payload.customer.id,
          loginUserId: action.payload.loginUserId,
        });
      }
    } else {
      yield put({
        type: actionTypes.CUSTOMER_UPDATE_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({type: actionTypes.CUSTOMER_UPDATE_FAIL});
  }
}
// watch for User action.
function* watchUpdateCustomer() {
  yield takeLatest(actionTypes.CUSTOMER_UPDATE_REQUEST, workerUpdateCustomer);
}

export default [
  fork(watchGetCustomer),
  fork(watchDeleteCustomer),
  fork(watchCreateCustomer),
  fork(watchGetCustomerById),
  fork(watchUpdateCustomer),
  fork(watchGetCustomerById),
];
