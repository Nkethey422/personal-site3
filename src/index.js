import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ViewportProvider } from "./use-viewport.js";

ReactDOM.render(
  <Router>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </Router>,
  document.getElementById("root")
);
