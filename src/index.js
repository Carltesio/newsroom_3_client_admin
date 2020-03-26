import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";

axios.defaults.baseURL = "https://newsroom3api.herokuapp.com/api/v1";

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
