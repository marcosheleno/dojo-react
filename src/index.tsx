import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./i18n/i18n";
import store from "./store/store";

ReactDOM.render(
  <React.Suspense fallback={<>Loading...</>}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);
