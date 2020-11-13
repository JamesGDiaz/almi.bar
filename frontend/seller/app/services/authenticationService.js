import axios from "axios";

const API_ENDPOINT = "http://localhost:3001/api/v1";
// const API_ENDPOINT = 'https://api.almi.bar/v1'

export const registerUserService = (request) => {
  const { email, password } = request.user;
  const REGISTER_API_ENDPOINT = API_ENDPOINT + "/auth/registration";

  const parameters = {
    url: REGISTER_API_ENDPOINT,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  };

  return axios(parameters).then((response) => {
    return response.data;
  });
};

export const loginUserService = (request) => {
  const { email, password } = request.user;
  const LOGIN_API_ENDPOINT = API_ENDPOINT + "/auth/login/local";

  const parameters = {
    url: LOGIN_API_ENDPOINT,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  };

  return axios(parameters).then((response) => {
    return response.data;
  });
};

export const checkLoginService = (request) => {
  const { email, password } = request.user;
  const LOGIN_API_ENDPOINT = API_ENDPOINT + "/auth/check";

  const parameters = {
    url: LOGIN_API_ENDPOINT,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  };

  return axios(parameters).then((response) => {
    return response.data;
  });
};

