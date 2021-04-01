import React from "react";
import { StrictMode } from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
