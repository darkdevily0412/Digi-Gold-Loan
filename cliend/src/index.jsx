import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
