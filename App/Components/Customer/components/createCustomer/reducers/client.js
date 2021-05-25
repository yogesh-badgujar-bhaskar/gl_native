import * as actionTypes from '../../../core/constants/actionTypes';
import {updateObject} from '../../../store/utility';

const initialState = {
  status: null,
  error: {},
  loading: false,
  message: '',
  pagination: null,
  ClientData: [],
  clientDetails: {},
};

const clientStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    ClientData: [],
  });
};

const clientCreateSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateStatus: true,
    ClientData: [],
  });
};

export const client = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLIENT_CREATE_REQUEST:
      return clientStart(state, action);

    case actionTypes.CLIENT_CREATE_FAIL:

    case actionTypes.CLIENT_CREATE_SUCCESS:
      return clientCreateSuccess(state, action);
    default:
      return state;
  }
};
