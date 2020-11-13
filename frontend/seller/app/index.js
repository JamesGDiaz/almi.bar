import "@babel/polyfill";

import React from "react";
import { render } from "react-dom";

import App from "./components/App";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";

import axios from 'axios'
axios.defaults.withCredentials = true

const store = configureStore()

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector("#root")
);
