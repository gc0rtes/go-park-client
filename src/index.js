import React from "react";
import ReactDOM from "react-dom";

//import our customizations and Bootstrap.
import "./style/global.scss";

import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
