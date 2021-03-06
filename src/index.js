import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { fetchAllMeetups } from "./actions/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllMeetups());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
