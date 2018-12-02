import { decodeJwt } from '../../../constants/jwt.utils';

// SignIn
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  user: null,
  status: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case SIGNIN_USER:
      console.warn('signin user from signIn: ', { action });
      return { ...state, user: null, status: 'signin', error: null, loading: true };
    case SIGNIN_USER_SUCCESS:
      console.warn('signin user success: ', { action });
      return {
        ...state,
        accessToken: {
          jwt: action.payload.token,
        },
        user: decodeJwt(action.payload.token),
        status: 'authenticated',
        isAuthenticated: true,
        error: null,
        loading: false,
      };
    case SIGNIN_USER_FAILURE:
      console.warn('signin user failed: ', { action });
      error = (action.payload.response && action.payload.response.data) || {
        message: action.payload.message,
      };
      return {
        ...state,
        user: null,
        status: 'signin',
        error: error,
        loading: false,
        isAuthenticated: false,
      };
    case ME_FROM_TOKEN_SUCCESS: //return user, status = authenticated and make loading = false
      console.warn('ME_FROM_TOKEN_SUCCESS: ', { action });
      return {
        ...state,
        accessToken: {
          jwt: action.payload.token,
        },
        user: decodeJwt(action.payload.token),
        status: 'authenticated',
        isAuthenticated: true,
        error: null,
        loading: false,
      }; //<-- authenticated
    case ME_FROM_TOKEN_FAILURE: // return error and make loading = false
      console.warn('ME_FROM_TOKEN_FAILURE: ', { action });
      error = action.payload.data || action.payload.message; //2nd one is network or server down errors
      return {
        ...state,
        user: null,
        status: 'storage',
        error: error,
        loading: false,
        isAuthenticated: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        status: 'logout',
        error: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
