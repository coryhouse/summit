import React from "react";
import ReactDOM from "react-dom";
import App from "./App.Hooks";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>,
  document.getElementById("root")
);
