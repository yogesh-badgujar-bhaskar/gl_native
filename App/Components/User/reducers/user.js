import * as actionTypes from '../../../core/constants/actionTypes';
import { updateObject } from '../../../store/utility';
// import { updateObject } from '../../../store/'
import get from "lodash/get";
import remove from "lodash/remove";

const _ = { get, remove };
const initialState = {
  status: null,
  error: {},
  loading: false,
  userData: [],
  userDetails: {},
  updateStatus: false,
  userDeletedFlag: false,
  userUpdated: false
};

// const userSuccess = (state, action) => {
//   console.log("reducers ")
//     return updateObject(state, {
//       userData: action.payload,
//       loading: false,
//       userDeletedFlag: false
//     });
   
//   };

  const userSuccess = (state, action) => {
    console.log('in to reducer action.payload', action.payload.data);
    return updateObject(state, {
      userData: action.payload.data,
      loading: false,
    });
  };
  // console.log("reducers data",updateObject.loading)

  export const user = (state = initialState , action) => {
      switch(action.type){
        case actionTypes.USER_START:
        case actionTypes.USER_SUCCESS:
            userSuccess(state , action);
        default:
            return state;
      }
  }