// actions for GET USER MODULE.

import * as actionTypes from '../../../core/constants/actionTypes';

// action creator for fetch all User
export function requestUserList(payload, fields) {
  return  {
    
      type: actionTypes.USER_START,
      payload: { ...payload, fields }
 
  };
}
