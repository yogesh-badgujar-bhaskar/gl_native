import get from 'lodash/get';
import remove from 'lodash/remove';
import * as actionTypes from '../../../core/constants/actionTypes';
import {updateObject} from '../../../store/utility';

const _ = {get, remove};
const initialState = {
  status: null,
  error: {},
  loading: false,
  message: '',
  pagination: null,
  CustomerData: [],
  customerDetails: {},
};
const customerStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    CustomerData: [],
  });
};
const customerSuccess = (state, action) => {
  return updateObject(state, {
    CustomerData: action.payload,
    loading: false,
  });
};

const customerCreateSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateStatus: true,
    customerData: [],
  });
};

export function requestCustomerById(payload, loginUserId = null) {
  console.log('UPDATE');
  return {
    type: actionTypes.CUSTOMER_GET_DETAILS_REQUEST,
    payload,
    loginUserId,
  };
}

const customerUpdateSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateStatus: true,
    customerUpdated: true,
    customerData: [],
  });
};

const editCustomer = (state, action) => {
  return updateObject(state, {
    customerDetails: action.payload,
    loading: false,
  });
};

const customerDelete = (state, action) => {
  let newCustomerData = [...state.customerData];
  _.remove(newCustomerData, function (e) {
    return e.id === action.payload.data.id;
  });
};

export const customer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_CREATE_REQUEST:

    case actionTypes.CUSTOMER_START:

    case actionTypes.CUSTOMER_REQUEST:
      return customerStart(state, action);

    case actionTypes.CUSTOMER_SUCCESS:
      return customerSuccess(state, action);

    case actionTypes.CUSTOMER_DELETE_SUCCESS:
      return customerDelete(state, action);

    case actionTypes.CUSTOMER_DELETE_FAIL:

    case actionTypes.CUSTOMER_CREATE_SUCCESS:
      return customerCreateSuccess(state, action);

    case actionTypes.CUSTOMER_UPDATE_REQUEST:
      return customerStart(state, action);

    case actionTypes.CUSTOMER_UPDATE_SUCCESS:
      return customerUpdateSuccess(state, action);

    case actionTypes.CUSTOMER_UPDATE_FAIL:

    case actionTypes.CUSTOMER_GET_DETAILS_REQUEST:

    case actionTypes.CUSTOMER_GET_DETAILS_SUCCESS:
      return editCustomer(state, action);

    case actionTypes.CUSTOMER_GET_DETAILS_FAIL:
      return employeeFail(state, action);

    default:
      return state;
  }
};
