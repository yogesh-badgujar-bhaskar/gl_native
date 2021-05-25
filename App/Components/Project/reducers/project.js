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
  ProjectData: [],
  projectDetails: {},
};
const projectStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    ProjectData: [],
  });
};
const projectSuccess = (state, action) => {
  console.log('in to reducer action.payload', action.payload);
  return updateObject(state, {
    ProjectData: action.payload,
    loading: false,
  });
};

export const project = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_START:
      console.log('reducer');
    case actionTypes.PROJECT_REQUEST:
      return projectStart(state, action);

    case actionTypes.PROJECT_SUCCESS:
      return projectSuccess(state, action);

    default:
      return state;
  }
};
