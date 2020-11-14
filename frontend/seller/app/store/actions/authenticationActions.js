import * as types from "./index";

export const registerUserAction = (payload) => {
  return {
    type: types.REGISTER_USER,
    payload,
  };
};

export const loginUserAction = (payload) => {
  return {
    type: types.LOGIN_USER,
    payload,
  };
};

export const checkLoginUserAction = () => {
  return {
    type: types.CHECK_LOGIN_USER,
  };
};


export const logoutUserAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};
