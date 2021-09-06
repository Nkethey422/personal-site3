import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ViewportProvider } from "./use-viewport.js";
import { createBrowserHistory } from "history";

const replaceHashPath = () => {
  const history = createBrowserHistory();
  const hash = history.location.hash;
  if (hash) {
    const path = hash.replace(/^#/, "");
    if (path) {
      history.replace(path);
    }
  }
};
replaceHashPath();

ReactDOM.render(
  <Router>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </Router>,
  document.getElementById("root")
);
