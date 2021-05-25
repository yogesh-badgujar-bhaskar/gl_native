import * as actionTypes from '../../../../../core/constants/actionTypes';

export function requestClientCreate(payload) {
  console.log('client action call', payload);
  return {
    type: actionTypes.CLIENT_CREATE_REQUEST,
    payload,
  };
}
