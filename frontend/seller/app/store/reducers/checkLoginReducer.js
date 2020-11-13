import * as types from "../actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.CHECK_LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: response.success,
        user: response.user,
      };
    case types.CHECK_LOGIN_USER_ERROR:
      return {
        ...state,
        authenticated: response.success,
        user: response.user,
      };
    default:
      return state;
  }
}
