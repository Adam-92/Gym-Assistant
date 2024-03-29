import React from "react";
import ReactDOM from "react-dom";
import AppProviders from "./AppProviders";
import Router from "./routing/components/Router";
import "./theme/global.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Router />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
