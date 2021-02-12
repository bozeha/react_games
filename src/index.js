///npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk axios

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//// applyMiddleware and compose are for using asinc
import { createStore, applyMiddleware, compose } from "redux";

import thank from "redux-thunk";
import { Provider } from "react-redux";

import allReducers from "../src/reducers";

import { BrowserRouter } from "react-router-dom";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//// the composeEnchancer(applyMiddleware(thank) is for asinc
const store = createStore(
  allReducers,
  composeEnchancer(applyMiddleware(thank))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
