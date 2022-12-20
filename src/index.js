import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TransationsProvider } from "./context/TransationContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransationsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransationsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
