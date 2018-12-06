import axios from 'axios';
import ENV from '../../constants/environment/environment';
import getHeaders from '../../constants/HeadersApi';

import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
  LOGOUT_USER,
} from '../reducers/auth/auth';

const RESOURCE = '/teacher';
const requestSignUp = payload => axios.post(ENV.apiUrl + `${RESOURCE}/register`, payload);
const requestSignIn = payload => axios.post(ENV.apiUrl + `${RESOURCE}/login`, payload);
const requestMeFromToken = () => axios.get(ENV.apiUrl + `${RESOURCE}/me/from/token`);
const requestLogout = () => axios.get(ENV.apiUrl + `${RESOURCE}/logout`);

function signInUser() {
  return {
    type: SIGNIN_USER,
  };
}
function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  };
}
function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
}
function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser,
  };
}
function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error,
  };
}
function logoutUser(currentUser) {
  return {
    type: LOGOUT_USER,
    payload: currentUser,
  };
}

export function dispatchSignUpTeacher(values) {
  return (dispatch, getState) => {
    return requestSignUp(values);
  };
}

export function dispatchSignInTeacher(values) {
  return (dispatch, getState) => {
    dispatch(signInUser());
    requestSignIn(values)
      .then(result => {
        //Store JWT Token to browser session storage
        //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
        // sessionStorage = persisted only in current tab
        sessionStorage.setItem('jwtToken', result.data.token);
        //let other components know that everything is fine by updating the redux` state
        console.warn('state before: ', getState());
        dispatch(signInUserSuccess(result.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        axios.defaults.headers = {
          ...axios.defaults.headers,
          ...getHeaders(result.data.token),
        };
        console.warn('state after: ', getState());
      })
      .catch(error => {
        console.warn({ error });
        console.warn('state before: ', getState());
        dispatch(signInUserFailure(error));
        console.warn('state after: ', getState());
      });
  };
}

export function dispatchMeFromTokenTeacher() {
  return (dispatch, getState) => {
    requestMeFromToken()
      .then(response => {
        sessionStorage.setItem('jwtToken', response.data.token);
        console.warn('state before: ', getState());
        dispatch(meFromTokenSuccess(response.data));
        console.warn('state after: ', getState());
      })
      .catch(error => {
        sessionStorage.removeItem('jwtToken'); //remove token from storage
        console.warn('state before: ', getState());
        dispatch(meFromTokenFailure(error));
        console.warn('state after: ', getState());
      });
  };
}

export function dispatchLogOutUserTeacher() {
  return (dispatch, getState) => {
    console.warn('state before: ', getState());
    requestLogout().then(response => {
      sessionStorage.removeItem('jwtToken');
      console.warn('state before: ', getState());
      dispatch(logoutUser(response.data));
      console.warn('state after: ', getState());
    });
  };
}
