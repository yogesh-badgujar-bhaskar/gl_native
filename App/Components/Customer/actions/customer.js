// import * as actionTypes from '../../../../../core/constant/actionTypes';
import * as actionTypes from '../../../core/constants/actionTypes';

export function requestCustomerList(payload, fields) {
  console.log('custoemr request in action');
  return {
    type: actionTypes.CUSTOMER_REQUEST,
    payload: {...payload, fields},
  };
}

export function requestCustomerDelete(payload) {
  // console.log('DELETE CUSTOMER ACTION.JS', payload);
  return {
    type: actionTypes.CUSTOMER_DELETE_REQUEST,
    payload,
  };
}

export function requestCustomerCreate(payload) {
  return {
    type: actionTypes.CUSTOMER_CREATE_REQUEST,
    payload,
  };
}

export function requestCustomerById(payload, loginUserId = null) {
  console.log('data');
  return {
    type: actionTypes.CUSTOMER_GET_DETAILS_REQUEST,
    payload,
    loginUserId,
  };
}

export function requestCustomerUpdate(payload, loginUserId = null) {
  console.log('action');
  return {
    type: actionTypes.CUSTOMER_UPDATE_REQUEST,
    payload: {...payload, loginUserId},
  };
}
