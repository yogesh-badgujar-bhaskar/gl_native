import { updateObject } from '../../../../store/utility';
import AsyncStorage  from "@react-native-community/async-storage";
import get from "lodash/get";
import * as actionTypes from '../../../../core/constants/actionTypes';
import { getTokenUser } from '../../../../core/helpers/utils'; 
import Storage from '../../../../core/helpers/storage'
const _ = { get };

/*
 * Reducer to store logged in user's token.
 */
const initialState = {
  token: null,
  status: null,
  id: null,
  name: null,
  error: null,
  loading: false,
  user: {}
};

const storeAuthUser = data => {
  Storage.saveToken(data.token);
};
const startLogin = (state, action) =>
  updateObject(state, { loading: true, error: null });

const authSuccess = (state, action) => {
  const data = _.get(action, "payload.data", "")
  const userData = getTokenUser(data.token);
  if (data.status === 200) {
    storeAuthUser(action.payload.data);
    return updateObject(state, {
      user: { ...userData },
      token: data.token,
      id: _.get(data, "id", ""),
      name: _.get(data, "first_name", ""),
      error: null,
      loading: false
    });
  }
};
const authLogout = (state, action) => {
  Storage.deleteUser();
  Storage.deleteToken();
  Storage.clear();
  localStorage.clear();
  return updateObject(state, {
    token: null,
    status: null,
    id: null,
    name: null,
    error: null,
    loading: false
  });
};
const authFail = (state, action) => {
  const status = _.get(action, "payload.status");
  if (!action.payload) {
    action.error = "";
  } else if (!status) {
    if (typeof _.get(action, "payload.error") === "string") {
      action.error = { message: _.get(action, "payload.error") };
    } else {
      action.error = { message: _.get(action, "payload.message") };
    }
  }
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authUserUpdate = (state, action) => {
  return updateObject(state, {
    user: action.payload
  });
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return startLogin(state, action);

    case actionTypes.SAVE_OAUTH_TOKEN:
      return authSuccess(state, action);

    case actionTypes.DELETE_OAUTH_TOKEN:
      return authLogout(state, action);

    case actionTypes.ERROR_LOGIN:
      return authFail(state, action);

    case actionTypes.AUTH_UPDATE_USER:
      return authUserUpdate(state, action);

    default:
      return state;
  }
};
