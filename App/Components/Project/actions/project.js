// import * as actionTypes from '../../../../../core/constant/actionTypes';
import * as actionTypes from '../../../core/constants/actionTypes';
export function requestProjectList(payload, fields) {
  console.log('welcome');
  return {
    type: actionTypes.PROJECT_REQUEST,
    payload: {...payload, fields},
  };
}
