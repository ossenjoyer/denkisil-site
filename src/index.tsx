import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";

import "@styles/index.css";

window.React = React;

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.Suspense fallback={`app is loading...`}>
    <App />
  </React.Suspense>
);
