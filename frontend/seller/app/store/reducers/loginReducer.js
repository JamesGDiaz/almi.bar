import * as types from "../actions";

const initState = {
  authenticated: false,
  user: {},
};

export default function (state = initState, action) {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: response.success,
        user: response.user || {},
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    case types.CHECK_LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: response.success,
        user: response.user || {},
      };
    case types.CHECK_LOGIN_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    case types.LOGOUT_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
}
