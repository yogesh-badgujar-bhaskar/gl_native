import * as actionTypes from '../../../../core/constants/actionTypes';

export const userSignInRequest = (userSignIn) => ({ type : actionTypes.USER_SIGNIN_REQUEST , userSignIn})

export const userSignInSuccess = (userSignIn) => ({ type: actionTypes.USER_SIGNIN_SUCCESS , userSignIn})


export function requestLogin(payload) {
  return{
      type: actionTypes.REQUEST_LOGIN,
      payload
  };
}

export function startLogin() {
  return {
    type: actionTypes.START_LOGIN 
  };
}

// action creator for saving the token with token
export function saveAuthToken(token) {
  return {
      type: actionTypes.SAVE_OAUTH_TOKEN,
      token
  };
}
